const UserModel = require("../Model/UserMode");
const UserService = require("../Service/UserService");


async function createUser (req, res) {
    const { name, email, password } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }

    try {
        const response = await UserService.createUser(name, email, password);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ error });
    }
};


async function getUserByFirstName (req, res) {
    const { firstName } = await UserModel.find({ name: req.params.firstName });
    res.status(200).json({ message: `User with first name ${firstName} found.` });
}

module.exports = { createUser };