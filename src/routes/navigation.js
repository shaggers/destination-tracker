const express = require("express");
const router = express.Router();

const navigationController = require("../controllers/navigationController")

router.get("/navigation", navigationController.index);
router.get("/navigation/:name", navigationController.show);

module.exports = router;