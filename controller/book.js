const Book = require("../models/book");

// book create
exports.create = async (req, res) => {
  try {
    const book = new Book(req.body);
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
    res.json(book);
  } catch (err) {
    res.json({ status: 500, msg: "server error" });
  }
};

// book update
