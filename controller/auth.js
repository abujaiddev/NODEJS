const User = require("../models/user");

exports.auth = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      res.statu(400).json({
        msg: "Invalid credential"
      });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({
      msg: "server error"
    });
  }
};
