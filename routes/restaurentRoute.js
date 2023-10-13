const express = require("express");
const router = express.Router();
const { getAllRestaurent } = require("../controllers/restaurentController");

router.route("/").get(getAllRestaurent);

module.exports = router;
