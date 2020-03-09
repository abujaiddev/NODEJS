const User = require("../models/user");
const bcrypt = require("bcryptjs");
const validateRegisterInput = require("../validation/register");

exports.registerUser = async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      res.status(400).json({ msg: "User already exists" });
    } else {
      const user = await new User({
        ...req.body
      });
      const salt = bcrypt.genSaltSync(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      res.json(user);
    }
  } catch (err) {
    res.json({
      status: 500,
      msg: "server error"
    });
  }
};

// users
exports.users = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
};

exports.profile = async (req, res) => {
  try {
    const profile = await User.findOne({ _id: req.user.id });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
};

exports.profileMe = async (req, res) => {
  try {
    const profile = await User.updateOne({ _id: req.user.id }, { ...req.body });

    res.json({ msg: "profile update", profile });
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
};
