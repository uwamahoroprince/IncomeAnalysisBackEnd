const express = require("express");

const {
  postBadgetPlan,
  getAllBadgetPlans,
  findsingleBadgetPlan,
  deleteBadgetPlan,
  updateBadgetPlan,
} = require("../controller/badgetPlan");

const router = express.Router();

router.route("/").get(getAllBadgetPlans).post(postBadgetPlan);
router
  .route("/:id")
  .get(findsingleBadgetPlan)
  .delete(deleteBadgetPlan)
  .put(updateBadgetPlan);

module.exports = router;
