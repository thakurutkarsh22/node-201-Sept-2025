const express = require("express");
const { route } = require("./UserActivityRoute");
const { createBlogs } = require("../Controllers/BlogsController");

const router = express.Router();

router.post("/createBlog", createBlogs);
// router.delete("/deleteBlog/:id", );
// router.get("/getAllBlogs", );
// router.get("/getBlogById/:id", );



module.exports = router;

