const asyncHander = require("../util/asyncHandler");
const ErrorResponse = require("../util/errorResponse");
const MemberShip = require("../model/membership");

exports.postMemberShip = asyncHander(async (req, res, next) => {
  const allActivities = [];
  for (const key in req.body.activity) {
    allActivities.push(req.body.activity[key].value);
  }
  const data = {
    activity: allActivities,
    client: req.body.client,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  };
  const memberShip = await MemberShip.create(data);
  if (!memberShip) {
    return next(new ErrorResponse("could not create new MemberShip", 400));
  }

  res.status(201).json({
    message: "MemberShip created",
    data: memberShip,
  });
});
exports.getAllMemberShips = asyncHander(async (req, res, next) => {
  const memberShip = await MemberShip.find({});
  if (!memberShip) {
    return next(new ErrorResponse("could not find MemberShips", 500));
  }
  res.status(200).json({
    message: "MemberShips found",
    count: memberShip.length,
    data: memberShip,
  });
});
exports.findsingleMemberShip = asyncHander(async (req, res, next) => {
  const memberShip = await MemberShip.findById(req.params.id);
  if (!memberShip) {
    return next(
      new ErrorResponse(
        `could not find an MemberShip with id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "MemberShip found",
    data: memberShip,
  });
});
exports.deleteMemberShip = asyncHander(async (req, res, next) => {
  const memberShip = await MemberShip.findByIdAndDelete(req.params.id);
  if (!memberShip) {
    return next(
      new ErrorResponse(
        `could not Delete MemberShip with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "MemberShip deleted",
    data: memberShip,
  });
});
exports.updateMemberShip = asyncHander(async (req, res, next) => {
  const memberShip = await MemberShip.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!memberShip) {
    return next(
      new ErrorResponse(
        `could not update  MemberShip with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "MemberShip updated",
    data: memberShip,
  });
});
