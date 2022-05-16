const Users = require("../model/user");
const asyncHandler = require("../util/asyncHandler");
const ErrorResponce = require("../util/errorResponse");
const mailSender = require("../util/nodemailer");
let token = "";
exports.createUser = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const isExist = await Users.findOne({ email });

  // make sure email dose not exist then create new user and send email to validate new account
  if (isExist) {
    return next(
      new ErrorResponce("sorry! there is an account with email", 400)
    );
  } else {
    try {
      const user = await Users.create(req.body);
      if (!user) {
        return next(new ErrorResponce("could not register an user", 400));
      }

      //SENDING JWT INTO COOKIE
      sendTokenResponse(user, 200, res);
      // const confirmUrl = `${process.env.APPLICATION_URL}/authentication/confirmAccount/${token}`;
      // await mailSender(user, confirmUrl);
    } catch (error) {
      console.log("email sending error: " + error);
      return next(new ErrorResponce("could not send email", 500));
    }
  }
});
const sendTokenResponse = (user, statusCode, res) => {
  token = user.getSignedJWT();
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  //ENABLELING HTTPS ONLY IN PRODUCTION
  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};
exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await Users.find({});
  if (!users) {
    return next(new ErrorResponce("could not get users", 400));
  }
  res.status(200).json({
    message: "found successfuly",
    data: users,
  });
});
exports.getSingleUser = asyncHandler(async (req, res, next) => {
  const singleUser = await Users.findById(req.params.id);
  if (!singleUser) {
    return next(new ErrorResponce("could not get user ", 400));
  }
  res.status(200).json({
    message: "found successfuly",
    data: singleUser,
  });
});
exports.updateUser = asyncHandler(async (req, res, next) => {
  const staff = await Users.findByIdAndUpdate({ _id: req.params.id }, req.body);
  if (!staff) {
    return next(
      new ErrorResponse(
        `could not update  Transaction with an id of ${req.params.id}`,
        400
      )
    );
  }
  res.status(200).json({
    message: "Transaction updated",
    data: staff,
  });
});
