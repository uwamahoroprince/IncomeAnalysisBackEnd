const mongoose = require("mongoose");

const Membership = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
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
    default: Date.now(),
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
