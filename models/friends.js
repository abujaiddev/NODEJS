const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// friendSchema = new Schema(
//   {
//     user_id: {
//       type: Schema.Types.ObjectId,
//       ref: "User"
//     },
//     friend_id: {
//       type: String
//     },
//     status: {
//       type: Number,
//       enums: [
//         0, //'add friend',
//         1, //'requested',
//         2, //'pending',
//         3 //'friends'
//       ]
//     }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Friend", friendSchema);

const friendsSchema = new Schema(
  {
    requester: { type: Schema.Types.ObjectId, ref: "Users" },
    recipient: { type: Schema.Types.ObjectId, ref: "Users" },
    status: {
      type: Number,
      enums: [
        0, //'add friend',
        1, //'requested',
        2, //'pending',
        3 //'friends'
      ]
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Friends", friendsSchema);
