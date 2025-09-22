const UserModel = require("../Model/UserMode");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../Middleware/AuthMiddleware");


class UserService {

    // this is signup
    static async createUser(name, email, password, age, phoneNumber) {

        // business logic
        const userObj = new UserModel({
            name, email, password: await UserService.hashPasssword(password), age, phoneNumber
        });


        // database
         try {
            const response = await userObj.save();
            return response;
         } catch (error) {
            return error
         }
    }

    static async hashPasssword(password) {
        // hashing logic
        const saltRounds = await bcrypt.genSalt(); // how many time to re-hash
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }


    static async loginUser(email, password) {
        // password : asdf1234
        const loggedInUser = {
            isLogged: false,
            token: ""
        }

        try {
            const user = await this.findUserByEmail(email);
            console.log("User found in DB: ", user);
            if(!user) {
                return loggedInUser;
            } else {
                // 1. passwoord match
                const encryptedPassword = user.password; // $2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW
                const isPasswordMatch = await bcrypt.compare(password, encryptedPassword);

                if(isPasswordMatch) {
                    const payload = {userEmail: user.email, id: user.id}
                    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "10000" });
                    return {
                        isLogged: isPasswordMatch,
                        token
                    }
                }

                return {
                    isLogged: isPasswordMatch,
                    token: ""
                }

            }
        } catch (error) {
            return {
                isLogged: false,
                token: ""
            }
        }

    }

    static async findUserByEmail(email) {
        const user = await UserModel.findOne({ email })
        return user;
    }
    
}

module.exports = UserService;

