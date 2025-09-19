const UserService = require("../Service/UserService");

async function signup(req, res) {

    const { body } = req;
    console.log("Body received in signup:", body);

    const { name, email, password, age, phoneNumber } = body;

    try {
        const response = await UserService.createUser(name, email, password, age, phoneNumber);
        res.status(201).json({ success: true, data: response });
    } catch(ex) {
        res.status(500).json({ success: false, error: ex });
    }
}

async function login(req, res) {
    
    const { body } = req;
    const { email, password } = body;

    try {
        const response = await UserService.loginUser(email, password);
        if(response.isLogged) {
            res.status(200).json({ success: true, message: "Login successful" });
        }  else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }

    } catch(ex) {
        res.status(500).json({ success: false, error: ex });   
    }
}

module.exports = {
    signup,
    login
};