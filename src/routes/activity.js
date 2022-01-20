const express = require("express");

const {
  postActivity,
  findsingleActivities,
  getAllActivities,
  deleteActivity,
  updateActivity,
} = require("../controller/activity");

const router = express.Router();

router.route("/").get(getAllActivities).post(postActivity);
router
  .route("/:id")
  .get(findsingleActivities)
  .delete(deleteActivity)
  .put(updateActivity);

module.exports = router;
