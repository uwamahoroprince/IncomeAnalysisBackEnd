const express = require("express");

const {
  postAccount,
  findsingleAccount,
  getAllAccounts,
  deleteAccount,
  updateAccount,
} = require("../controller/account");

const router = express.Router();

router.route("/").get(getAllAccounts).post(postAccount);
router
  .route("/:id")
  .get(findsingleAccount)
  .delete(deleteAccount)
  .put(updateAccount);

module.exports = router;
