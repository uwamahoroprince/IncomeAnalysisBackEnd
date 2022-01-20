const asyncHander = require("../util/asyncHandler");
const ErrorResponse = require("../util/errorResponse");
const Transaction = require("../model/transaction");

exports.postTransaction = asyncHander(async (req, res, next) => {
  const transaction = await Transaction.create(req.body);
  if (!transaction) {
    return next(new ErrorResponse("could not create new Transaction", 400));
  }
  res.status(201).json({
    message: "Transaction created",
    data: transaction,
  });
});
exports.getAllTransactions = asyncHander(async (req, res, next) => {
  const transaction = await Transaction.find({});
  if (!transaction) {
    return next(new ErrorResponse("could not find Transactions", 500));
  }
  res.status(200).json({
    message: "Transactions found",
    count: transaction.length,
    data: transaction,
  });
});
exports.findsingleTransaction = asyncHander(async (req, res, next) => {
  const transaction = await Transaction.findById(req.params.id);
  if (!transaction) {
    return next(
      new ErrorResponse(
        `could not find an Transaction with id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "Transaction found",
    data: transaction,
  });
});
exports.deleteTransaction = asyncHander(async (req, res, next) => {
  const transaction = await Transaction.findByIdAndDelete(req.params.id);
  if (!transaction) {
    return next(
      new ErrorResponse(
        `could not Delete Transaction with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "Transaction deleted",
    data: transaction,
  });
});
exports.updateTransaction = asyncHander(async (req, res, next) => {
  const transaction = await Transaction.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!transaction) {
    return next(
      new ErrorResponse(
        `could not update  Transaction with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "Transaction updated",
    data: transaction,
  });
});
