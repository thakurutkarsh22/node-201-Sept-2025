const SERVER_SECRET_PASSWORD = "asdf1234";

function authMiddleware (req, res, next) {

    const headerAuthPassword = req.headers["authorization"];
    if(headerAuthPassword === SERVER_SECRET_PASSWORD) {
        // if the req is GOOD 
        next();
    } else {
        // req is bad 
        res.status(401).json({ message: "Unauthorized. from middleware" });
    }

}

module.exports = authMiddleware;