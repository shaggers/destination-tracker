const express = require("express");
const router = express.Router();

const navigationController = require("../controllers/navigationController")

router.get("/navigation", navigationController.index);

module.exports = router;