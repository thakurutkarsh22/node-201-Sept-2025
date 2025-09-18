const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(6).max(40).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(40).required()
});


// this user INput is from POSTMAN
function validateUser(userInput) {
    return userSchema.validate(userInput);
}

module.exports = {userSchema, validateUser};