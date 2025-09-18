const mongoose = require('mongoose');
const validatorPackage = require("validator");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: (data) => {
            return validatorPackage.isEmail(data);
        }
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    phoneNumber: {
        type: String,
        trim: true,
        validate: (data) => {
            return validatorPackage.isMobilePhone(data, 'any');
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;