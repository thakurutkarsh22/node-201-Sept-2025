const express = require("express");
const { createUser } = require("../Controllers/UserController");
const UserInputValidator = require("../Middleware/UserInputValidationMiddlware");
const router = express.Router();

router.post("/createUser", UserInputValidator, createUser);
// router.get("/search", authMiddleware, getUserByGender);
// router.get("/:firstName", getUserByFirstName);



module.exports = router;

