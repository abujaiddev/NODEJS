const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  work: {
    type: String,
    default: null
  },
  phone: {
    type: Number,
    default: null
  },
  education: {
    type: String,
    default: null
  },
  avatarColor: {
    type: String
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
