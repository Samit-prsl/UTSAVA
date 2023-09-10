const { UserRepository } = require('./repository/index1');

class UserService {
    constructor() {
        this.UserRepository = new UserRepository;
    }
    async createUser(data) {
        try {
            const user = await this.UserRepository.createUser(data);
            return user;

            
        } catch (error) {
            console.log("Something went wrong in the services layer");
            throw {error};            
        }
    }
    async deleteUser(userId) {
        try {
            const response = await this.UserRepository.deleteUser(userId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the services layer");
            throw {error}; 
        }
    }
    async updateUser(userId,data) {
        try {
            const user = await this.UserRepository.updateUser(userId,data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the services layer");
            throw {error}; 
        }
    }
    async getUser(userId) {
        try {
            const user = await this.UserRepository.getUser(userId);
            return user;
            
        } catch (error) {
            console.log("Something went wrong in the services layer");
            throw {error}; 
        }
    }
}

module.exports = UserService;