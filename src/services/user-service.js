import { UserRepository } from "../repository/index.js"

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async validateEmail(email) {
        let user = await this.getUserByEmail(email);
        return user ? false : true;
    };

    async getUserByEmail(email) {
        try {
            const user = await this.userRepository.findBy({ email })
            return user;
        } catch (error) {
            throw error;
        }
    }

    /**
    * @DESC To register the user (ADMIN,USER)
    */
    async Signup(data) {
        console.log(data);
        try {
            // validate the email
            let emailNotRegistered = await this.validateEmail(data.email);
            if (!emailNotRegistered) {
                throw {
                    message: `Email is already registered.`,
                }
            }
            const user = await this.userRepository.create(data);
            const token = user.genJWT();
            return { token, email: user.email };
        } catch (error) {
            console.log("something went wrong in the UserService");
            throw error
        }
    }


    async signin(data) {
        try {
            const user = await this.getUserByEmail(data.email);
            // First Check if the username is in the database
            if (!user) {
                throw {
                    message: 'no user found with this email'
                };
            }

            // We will check the role
            if (user.role !== data.role) {
                throw {
                    message: "Please make sure you are logging with the right role",
                }
            }
            if (!user.comparePassword(data.password)) {
                throw {
                    message: 'incorrect password',
                };
            }
            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }

}
export default UserService;