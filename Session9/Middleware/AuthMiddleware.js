const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = "asdasfdsfsafsadfasdfsdfsaf3254235235$$$$$$$$$$$;"

function authMiddleware (req, res, next) {

    const bearerToken = req.headers["authorization"];
    const token = bearerToken && bearerToken.split(" ")[1]; // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJhbWl0QGdtYWlsLmNvbSIsImlkIjoiNjhjYzI3YzNmZG
    
    if(token == null) {
        return res.status(401).json({ message: "Hey please Login" });
    } else {
        jwt.verify(token, JWT_SECRET_KEY, (err, payload)  => {
            if(err) {
                return res.status(403).json({ message: "Please re-login" });
            } else {
                console.log("Payload from token is:", payload);
                // req.user = payload;
                next();
            }
        });
    }


}

module.exports = {authMiddleware, JWT_SECRET_KEY};