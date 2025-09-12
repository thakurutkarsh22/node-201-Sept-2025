const UserModel = require("../Model/UserMode");

class UserService {

    static async createUser(name, email, password) {

        // business logic
        const userObj = new UserModel({
            name, email, password
        });


        // database
         try {
            const response = await userObj.save();
            return response;
         } catch (error) {
            return error
         }


        const user = {
            id: this.users.length + 1,
            ...userData
        };
        this.users.push(user);
        return user;
    }
}

module.exports = UserService;