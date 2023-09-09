const { User } = require('../models/index1');

class UserRepository {
    async createUser({ name }){
        try {
            const user = await user.create({ name });
            return user;
            
        } catch (error) {
            throw {error};
        }
    }

    async deleteUser(userId){
            try {
                await User.destroy({
                    where: {
                        id: userId
                    },
                });
            } catch (error) {
                throw {error};
            }
    }
}

module.exports = UserRepository;