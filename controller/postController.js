const Post = require("../models/post");
const User = require("../models/user");

// book create
exports.create = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const post = new Post({
      ...req.body,
      username: user.username,
      user: req.user.id
    });
    await post.save();
    res.json(post);
  } catch (err) {
    res.json({
      status: 500,
      msg: "server error"
    });
  }
};

// books list
exports.posts = async (req, res) => {
  try {
    const post = await Post.find({ user: req.user.id }).populate("user");
    res.json(post);
  } catch (err) {
    res.json({
      status: 500,
      msg: "server error"
    });
  }
};

// get book
exports.post = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ status: 500, msg: "server error" });
  }
};

// book delete
exports.post_delete = async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id });
    if (post.user.toString() !== req.user.id) {
      res.status(401).json({ msg: "User not authorized" });
    } else {
      await post.remove();
      res.json({ msg: "post removed" });
    }
  } catch (err) {
    res.json({ status: 500, msg: "server error" });
  }
};

// book update
exports.post_update = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    await post.save();
    res.json({
      msg: "post is updated"
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
