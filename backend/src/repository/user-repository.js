const { User } = require("../models/user");

class UserRepository {
  async createUser({ name }) {
    try {
      const user = await user.create({ name });
      return user;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteUser(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateUser(userId, data) {
    try {
      const user = await User.update(data, {
        where: {
          id: userId,
        },
      });
      return user;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
  async getUser(userId) {
    try {
      const user = await User.findbyPK(userId);
      return user;
    } catch (error) {
      console.log("Something went wrong in the repository layer ");
      throw { error };
    }
  }
}

module.exports = UserRepository;
