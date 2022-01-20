const mongoose = require("mongoose");

const Activity = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "activity name is required"],
    unique: true,
  },
  amountPermonth: {
    type: Number,
    required: [true, "amount per month is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("activity", Activity);
