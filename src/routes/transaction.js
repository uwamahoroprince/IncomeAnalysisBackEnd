const express = require("express");

const {
  postTransaction,
  getAllTransactions,
  findsingleTransaction,
  deleteTransaction,
  updateTransaction,
} = require("../controller/transaction");

const router = express.Router();

router.route("/").get(getAllTransactions).post(postTransaction);
router
  .route("/:id")
  .get(findsingleTransaction)
  .delete(deleteTransaction)
  .put(updateTransaction);

module.exports = router;
