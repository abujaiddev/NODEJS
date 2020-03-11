const mongoose = require("mongoose");
const Schema = mongoose.Schema;

friendSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  friend_id: {
    type: String
  }
});

module.exports = mongoose.model("Friend", friendSchema);
