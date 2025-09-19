const UserModel = require("../Model/UserMode");
const bcrypt = require("bcrypt");

class UserService {

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
            isLogged: false
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
                return {
                    isLogged: isPasswordMatch,
                }

            }
        } catch (error) {
            return {
                isLogged: false
            }
        }

    }

    static async findUserByEmail(email) {
        const user = await UserModel.findOne({ email })
        return user;
    }
    
}

module.exports = UserService;

