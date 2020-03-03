const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  avatarColor: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
