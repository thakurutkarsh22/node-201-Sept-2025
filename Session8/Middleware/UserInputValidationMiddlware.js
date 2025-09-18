const { validateUser } = require("../Validator/UserInputValidator");


function UserInputValidator(req, res, next) {
    const { body } = req;
    const validationResult = validateUser(body);

    if (validationResult.error) {
        return res.status(400).json({error: validationResult.error, "message": 
            "Input Validation Failed please check the body"
         });
    }

    next();
}

module.exports = UserInputValidator;