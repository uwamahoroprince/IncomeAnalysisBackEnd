const express = require("express");
const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} = require("../controller/user");
const router = express.Router();

router.route("/").post(createUser).get(getAllUsers);
router.route("/:id").get(getSingleUser).put(updateUser);

module.exports = router;
