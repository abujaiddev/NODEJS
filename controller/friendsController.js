const User = require("../models/user");
const Friend = require("../models/friends");

exports.friendRequest = async (req, res) => {
  try {
    const friendId = req.params.id;
    const friend = await new Friend({
      ...req.body,
      user_id: req.user.id,
      friend_id: friendId
    });
    await friend.save();
    res.json(friend);
  } catch (error) {
    res.status(500).json("server error");
  }
};

exports.friends = async (req, res) => {
  try {
    const friends = await Friend.find({});
    res.json(friends);
  } catch (error) {
    res.status(500).json("server error");
  }
};
