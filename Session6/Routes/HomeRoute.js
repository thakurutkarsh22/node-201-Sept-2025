const express = require("express");
const { homeResponse, aboutResponse } = require("../Controllers/HomeController");
const router = express.Router();

router.get("/", homeResponse);
router.get("/home", homeResponse);
router.get("/abouts", aboutResponse);




module.exports = router;

