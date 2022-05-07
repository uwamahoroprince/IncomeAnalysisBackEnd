const mongoose = require("mongoose");

const BadgetPlan = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Add Provide Budget Name"],
    trim: true,
  },
  account: {
    type: mongoose.Schema.ObjectId,
    require: [true, "at least one acount is required "],
    ref: "account",
  },

  expense: [{}],
  expectedIncome: {
    type: Number,
    require: [true, "expected income is required"],
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  endDate: {
    type: Date,
    required: [true, "End date is required"],
  },
  startDate: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    required: false,
    unique: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("badgetPlan", BadgetPlan);
