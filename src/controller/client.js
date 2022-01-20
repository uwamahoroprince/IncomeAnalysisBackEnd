const asyncHander = require("../util/asyncHandler");
const ErrorResponse = require("../util/errorResponse");
const Client = require("../model/client");

exports.postClient = asyncHander(async (req, res, next) => {
  const client = await Client.create(req.body);
  if (!client) {
    return next(new ErrorResponse("could not create new Client", 400));
  }
  res.status(201).json({
    message: "Client created",
    data: client,
  });
});
exports.getAllClients = asyncHander(async (req, res, next) => {
  const client = await Client.find({});
  if (!client) {
    return next(new ErrorResponse("could not find Clients", 500));
  }
  res.status(200).json({
    message: "Clients found",
    count: client.length,
    data: client,
  });
});
exports.findsingleClient = asyncHander(async (req, res, next) => {
  const client = await Client.findById(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(
        `could not find an Client with id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "Client found",
    data: client,
  });
});
exports.deleteClient = asyncHander(async (req, res, next) => {
  const client = await Client.findByIdAndDelete(req.params.id);
  if (!client) {
    return next(
      new ErrorResponse(
        `could not Delete Client with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "Client deleted",
    data: client,
  });
});
exports.updateClient = asyncHander(async (req, res, next) => {
  const client = await Client.findByIdAndUpdate(
    { _id: req.params.id },
    req.body
  );
  if (!client) {
    return next(
      new ErrorResponse(
        `could not update  Client with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "Client updated",
    data: client,
  });
});
