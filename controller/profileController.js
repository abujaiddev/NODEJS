const Profile = require("../models/profile");
const path = require("path");

exports.getUserProfileImage = async (req, res) => {
  try {
    const userProfileImage = await Profile.find({ user_id: req.user.id });
    res.json(userProfileImage);
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
exports.profile = async (req, res) => {
  try {
    // return console.log(req.files);

    const profile = await new Profile({
      ...req.body,
      userPhoto: req.files[1].path,
      userCoverPhoto: req.files[0].path,
      user_id: req.user.id
    });
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};

exports.profileUpdate = async (req, res) => {
  //   return console.log(req.file);
  try {
    const path = req.file && req.file.path;
    const userProfileImage = await Profile.updateOne(
      { _id: req.user.id },
      { userPhoto: path }
    );
    res.json({ msg: "profile update", userProfileImage });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
