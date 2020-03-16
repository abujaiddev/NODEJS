const Address = require("../models/address");

exports.address = async (req, res) => {
  try {
    const address = await Address.findOne({ user_id: req.user.id });
    res.json(address);
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
exports.addressUpdate = async (req, res) => {
  try {
    const address = await new Address({
      ...req.body,
      user_id: req.user.id
    });
    address.save();
    res.json(address);
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
};
