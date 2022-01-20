const asyncHander = require("../util/asyncHandler");
const ErrorResponse = require("../util/errorResponse");
const Account = require("../model/account");

exports.postAccount = asyncHander(async (req, res, next) => {
  const account = await Account.create(req.body);
  if (!account) {
    return next(new ErrorResponse("could not create new account", 400));
  }
  res.status(201).json({
    message: "account created",
    data: account,
  });
});
exports.getAllAccounts = asyncHander(async (req, res, next) => {
  const accounts = await Account.find({});
  if (!accounts) {
    return next(new ErrorResponse("could not find accounts", 500));
  }
  res.status(200).json({
    message: "accounts found",
    count: accounts.length,
    data: accounts,
  });
});
exports.findsingleAccount = asyncHander(async (req, res, next) => {
  const account = await Account.findById(req.params.id);
  if (!account) {
    return next(
      new ErrorResponse(
        `could not find an account with id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "account found",
    data: accounts,
  });
});
exports.deleteAccount = asyncHander(async (req, res, next) => {
  const account = await Account.findByIdAndDelete(req.params.id);
  if (!account) {
    return next(
      new ErrorResponse(
        `could not Delete account with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "account deleted",
    data: account,
  });
});
exports.updateAccount = asyncHander(async (req, res, next) => {
  const account = await Account.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!account) {
    return next(
      new ErrorResponse(
        `could not update  account with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "account updated",
    data: account,
  });
});
