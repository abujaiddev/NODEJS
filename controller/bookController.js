const Book = require("../models/book");
const User = require("../models/user");
const auth = require("../middleware/auth");

// book create
exports.create = async (req, auth, res) => {
  // console.log("=================", req);
  try {
    const user = await User.findById(req.user.id);
    // const id = req.body.id;
    // const user = await User.findById(id);
    // console.log("========", user);
    // const book = new Book({
    //   book_name: req.body.book_name,
    //   book_author: req.body.book_author
    //   // username: user.username
    // });
    // await book.save();
    // res.json(book);
  } catch (err) {
    // res.json({
    //   status: 500,
    //   msg: "server error"
    // });
  }
};

// books list
exports.books = async (req, res) => {
  try {
    const book = await Book.find();
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
    const book = await Book.findByIdAndDelete({ _id: req.params.id });
    if (!book) {
      res.status(404).json({ msg: "No item found" });
    } else {
      res.json(book);
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
