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
  },
  updatedAt: {
    type: Date,
    default: function() {
      return Date.now();
    }
  }
});
bookSchema.pre("save", function(done) {
  this.updatedAt = Date.now();
  done();
});
module.exports = mongoose.model("Book", bookSchema);
