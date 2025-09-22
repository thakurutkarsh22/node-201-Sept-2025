const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { JWT_SECRET_KEY } = require('../Middleware/AuthMiddleware');


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET_KEY,
};


const stratergy = new JwtStrategy(options, (payload, done) => {
    console.log("Payload received in passport strategy:", payload);
    try {
        // You can perform additional checks here if needed
        return done(null, payload);
    } catch (error) {
        return done(error, false);
    }
});


module.exports = (passport) => {
    passport.use(stratergy);
}

