const asyncHander = require("../util/asyncHandler");
const ErrorResponse = require("../util/errorResponse");
const BadgetPlan = require("../model/badgetPlan");

exports.postBadgetPlan = asyncHander(async (req, res, next) => {
  const badgetPlan = await BadgetPlan.create(req.body);
  if (!badgetPlan) {
    return next(new ErrorResponse("could not create new BadgetPlan", 400));
  }
  res.status(201).json({
    message: "BadgetPlan created",
    data: badgetPlan,
  });
});
exports.getAllBadgetPlans = asyncHander(async (req, res, next) => {
  const badgetPlan = await BadgetPlan.find({});
  if (!badgetPlan) {
    return next(new ErrorResponse("could not find BadgetPlans", 500));
  }
  res.status(200).json({
    message: "BadgetPlans found",
    count: badgetPlan.length,
    data: badgetPlan,
  });
});
exports.findsingleBadgetPlan = asyncHander(async (req, res, next) => {
  const badgetPlan = await BadgetPlan.findById(req.params.id);
  if (!badgetPlan) {
    return next(
      new ErrorResponse(
        `could not find an BadgetPlan with id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "BadgetPlan found",
    data: badgetPlan,
  });
});
exports.deleteBadgetPlan = asyncHander(async (req, res, next) => {
  const badgetPlan = await BadgetPlan.findByIdAndDelete(req.params.id);
  if (!badgetPlan) {
    return next(
      new ErrorResponse(
        `could not Delete BadgetPlan with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "BadgetPlan deleted",
    data: badgetPlan,
  });
});
exports.updateBadgetPlan = asyncHander(async (req, res, next) => {
  const badgetPlan = await BadgetPlan.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!badgetPlan) {
    return next(
      new ErrorResponse(
        `could not update  BadgetPlan with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "BadgetPlan updated",
    data: badgetPlan,
  });
});
