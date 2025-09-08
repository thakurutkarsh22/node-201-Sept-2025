const express = require("express");
const { getAllUsers, getUserByGender, getUserByFirstName } = require("../Controllers/UserActivityController");
const authMiddleware = require("../Middleware/AuthMiddleware");
const router = express.Router();

router.get("/", authMiddleware,  getAllUsers);
router.get("/search", authMiddleware, getUserByGender);
router.get("/:firstName", getUserByFirstName);



module.exports = router;

