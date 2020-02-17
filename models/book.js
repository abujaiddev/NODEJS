const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  book_name: {
    type: String,
    required: true,
    default: "Book"
  },
  book_author: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Book", bookSchema);
