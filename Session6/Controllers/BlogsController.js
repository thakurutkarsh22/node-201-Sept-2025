const BlogsModel = require("../Model/BlogsModel");

const createBlogs = async (req, res) => {
    try {
        console.log(req.body, 'body');

        const { title, content, author } = req.body;



        // create a new Object of blog 
        const newBlog = new BlogsModel({
            title,
            content,
            author
        });


        // save this object in DB 

        try {
            const response = await newBlog.save();
            res.status(201).json({ success: true, data: response });
        } catch (error) {
            res.status(500).json({ success: false, message: error });
        }

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createBlogs };