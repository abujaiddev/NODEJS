const Book = require("../models/book");
const User = require("../models/user");

// book create
exports.create = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    // console.log("========", user);
    const book = new Book({
      book_name: req.body.book_name,
      book_author: req.body.book_author,
      username: user.username,
      user: req.user.id
    });
    await book.save();
    res.json(book);
  } catch (err) {
    res.json({
      status: 500,
      msg: "server error"
    });
  }
};

// books list
exports.books = async (req, res) => {
  try {
    const book = await Book.find({ user: req.user.id }).populate("user");
    res.json(book);
  } catch (err) {
    res.json({
      status: 500,
      msg: "server error"
    });
  }
};

// get book
exports.book = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (err) {
    res.json({ status: 500, msg: "server error" });
  }
};

// book delete
exports.book_delete = async (req, res) => {
  try {
    const book = await Book.findById({ _id: req.params.id });
    if (book.user.toString() !== req.user.id) {
      res.status(401).json({ msg: "User not authorized" });
    } else {
      await book.remove();
      res.json({ msg: "book removed" });
    }
  } catch (err) {
    res.json({ status: 500, msg: "server error" });
  }
};

// book update
exports.book_update = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    await book.save();
    res.json({
      msg: "Book is updated"
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
