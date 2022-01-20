const express = require("express");
const {
  postMemberShip,
  findsingleMemberShip,
  getAllMemberShips,
  deleteMemberShip,
  updateMemberShip,
} = require("../controller/membership");

const router = express.Router();

router.route("/").get(getAllMemberShips).post(postMemberShip);
router
  .route("/:id")
  .get(findsingleMemberShip)
  .delete(deleteMemberShip)
  .put(updateMemberShip);
module.exports = router;
