const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  text: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
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
postSchema.pre("save", function(done) {
  this.updatedAt = Date.now();
  done();
});
module.exports = mongoose.model("Post", postSchema);
