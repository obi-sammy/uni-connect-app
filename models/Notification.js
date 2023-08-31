const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    personId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Notification", NotificationSchema);