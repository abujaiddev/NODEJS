const User = require("../models/user");
const Friend = require("../models/friends");

// exports.friendRequest = async (req, res) => {
//   try {
//     const friendId = req.params.id;
//     const friendExists = await Friend.findOne({ friend_id: friendId });
//     if (friendExists) {
//       res.status(401).json({ msg: "friend request alredy sent" });
//     } else {
//       const friend = await new Friend({
//         ...req.body,
//         user_id: req.user.id,
//         friend_id: friendId
//       });
//       await friend.save();
//       res.json(friend);
//     }
//   } catch (error) {
//     res.status(500).json("server error");
//   }
// };

exports.friends = async (req, res) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
  } catch (error) {
    res.status(500).json("server error");
  }
};

exports.friend = async (req, res) => {
  try {
    const friend = await User.findById(req.params.id);
    res.json(friend);
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};

// friend requester

exports.friendRequest = async (req, res) => {
  try {

    // return console.log(req.user.id)
    const friend = await Friend.findOneAndUpdate(
      { requester: req.user.id, recipient: req.params.id },
      { $set: { status: 1 } },
      { upsert: true, new: true }
    )
    res.json(friend)
  } catch (error) {
    res.status(500).json({ msg: 'server error' })
  }

}

// friend recipient

exports.friendRecipient = async (req, res) => {
  try {
    const docB = await Friend.findOneAndUpdate(
      { recipient: req.user.id, requester: req.params.id },
      { $set: { status: 2 } },
      { upsert: true, new: true }
    )
    res.json(docB)
  } catch (error) {

  }
}
