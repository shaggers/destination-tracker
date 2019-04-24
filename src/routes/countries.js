const express = require("express");
const router = express.Router();

const countryController = require("../controllers/countryController")

router.get("/navigation/:continent/countries/:name", countryController.show);

module.exports = router;