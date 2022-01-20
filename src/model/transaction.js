const mongoose = require("mongoose");

const Transaction = new mongoose.Schema({
  type: {
    type: String,
    enum: ["income", "expense"],
    require: [true, "transaction type is required"],
  },
  amount: {
    type: Number,
    required: [true, "Transaction amount is required"],
  },
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "client",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("transaction", Transaction);
