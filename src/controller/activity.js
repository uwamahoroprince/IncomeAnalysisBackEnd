const asyncHander = require("../util/asyncHandler");
const ErrorResponse = require("../util/errorResponse");
const Activity = require("../model/activity");

exports.postActivity = asyncHander(async (req, res, next) => {
  const activity = await Activity.create(req.body);
  if (!activity) {
    return next(new ErrorResponse("could not create new Activity", 400));
  }
  res.status(201).json({
    message: "Activity created",
    data: activity,
  });
});
exports.getAllActivities = asyncHander(async (req, res, next) => {
  const activity = await Activity.find({});
  if (!activity) {
    return next(new ErrorResponse("could not find Activities", 500));
  }
  res.status(200).json({
    message: "Activitys found",
    count: activity.length,
    data: activity,
  });
});
exports.findsingleActivities = asyncHander(async (req, res, next) => {
  const activity = await Activity.findById(req.params.id);
  if (!activity) {
    return next(
      new ErrorResponse(
        `could not find an Activity with id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "Activity found",
    data: Activitys,
  });
});
exports.deleteActivity = asyncHander(async (req, res, next) => {
  const activity = await Activity.findByIdAndDelete(req.params.id);
  if (!activity) {
    return next(
      new ErrorResponse(
        `could not Delete Activity with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "Activity deleted",
    data: activity,
  });
});
exports.updateActivity = asyncHander(async (req, res, next) => {
  const activity = await Activity.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!activity) {
    return next(
      new ErrorResponse(
        `could not update  Activity with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "Activity updated",
    data: activity,
  });
});
