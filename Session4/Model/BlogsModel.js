const { Schema, default: mongoose } = require("mongoose");

const BlogsSchema = new Schema({
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    tags: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    published: { type: Boolean, default: false },
    views: { type: Number, default: 0 }
});

module.exports = mongoose.model("Blogs", BlogsSchema);