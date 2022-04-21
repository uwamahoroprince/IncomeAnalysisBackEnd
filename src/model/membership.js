const mongoose = require("mongoose");

const Membership = new mongoose.Schema({
  activity: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "activity",
    },
  ],
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "client",
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  startDate: {
    type: Date,
    required: [true, "start date is required"],
  },
  endDate: {
    type: Date,
    required: [true, "End date is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("membership", Membership);
