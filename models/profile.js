const mongoose = require("mongoose");
const Schema = mongoose.Schema;

profileSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  userPhoto: {
    type: String
  },
  userCoverPhoto: {
    type: String
  }
});

module.exports = mongoose.model("Profile", profileSchema);
