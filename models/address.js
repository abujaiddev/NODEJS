const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addresSchema = Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  address: { type: String, default: null, lowercase: true, trim: true },
  workplace: { type: String, default: null, trim: true },
  School_or_university: {
    type: String,
    lowercase: true,
    trim: true,
    default: null
  },
  home_town: { type: String, lowercase: true, trim: true, default: null },
  relationship_status: {
    type: String,
    lowercase: true,
    trim: true,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Address", addresSchema);
