const express = require("express");
const { getAllUsers, getUserByGender, getUserByFirstName } = require("../Controllers/UserActivityController");
const {authMiddleware} = require("../Middleware/AuthMiddleware");
const router = express.Router();

const passport = require("passport");
const AuthMiddlewarePassportJwt = passport.authenticate('jwt', 
    { session: false, failureRedirect: '/login' });



router.get("/", AuthMiddlewarePassportJwt,  getAllUsers);
router.get("/search", authMiddleware, getUserByGender);
router.get("/:firstName", getUserByFirstName);



module.exports = router;

