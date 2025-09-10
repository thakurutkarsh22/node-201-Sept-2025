const { Schema, default: mongoose } = require("mongoose");
const validatorPackage = require("validator");

const BlogsSchema = new Schema({
    title: { type: String, required: true, trim: true, minlength: 5, maxlength: 100, 
        validate: (data) => {
            return validatorPackage.isAlphanumeric(data);

        }},
    content: { type: String, required: true },
    author: { type: String, required: true },
});

module.exports = mongoose.model("Blogs", BlogsSchema);