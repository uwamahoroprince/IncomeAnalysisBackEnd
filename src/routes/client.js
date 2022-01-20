const express = require("express");

const {
  postClient,
  getAllClients,
  findsingleClient,
  deleteClient,
  updateClient,
} = require("../controller/client");

const router = express.Router();

router.route("/").get(getAllClients).post(postClient);
router
  .route("/:id")
  .get(findsingleClient)
  .delete(deleteClient)
  .put(updateClient);

module.exports = router;
