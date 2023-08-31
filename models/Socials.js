const mongoose = require("mongoose");

const SocialsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  igUserName: {
    type: String,
  },
  snapchatUserName: {
    type: String,
  },
  twitterUsername: {
    type: String,
  },
  facebookUserName: {
    type: String,
  },
  linkedInUserName: {
    type: String,
  }
});

module.exports = mongoose.model("Social", SocialsSchema);
