const UserModel = require("../Model/UserMode");


async function createUser (req, res) {
    const { name, email, password } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }

    const userObj = new UserModel({
        name, email, password
    });

    try {
        const response = await userObj.save();
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = { createUser };