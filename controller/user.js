const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      res.status(400).json({ msg: "User already exists" });
    } else {
      const user = await new User({
        username,
        email,
        password
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
