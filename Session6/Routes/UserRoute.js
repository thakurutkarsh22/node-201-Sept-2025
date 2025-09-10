const express = require("express");
const { createUser } = require("../Controllers/UserController");
const router = express.Router();

router.post("/createUser",  createUser);
// router.get("/search", authMiddleware, getUserByGender);
// router.get("/:firstName", getUserByFirstName);



module.exports = router;

