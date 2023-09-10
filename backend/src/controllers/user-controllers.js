const userService = require("../services/user-services");

//const userService = new UserService();

const create = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json({
      data: user,
      success: true,
      message: "Succesfully Created a User",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a User",
      err: error,
    });
  }
};
const destroy = async (req, res) => {
  try {
    const response = await userService.deleteUser(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Succesfully Deleted a User",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a User",
      err: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const response = await userService.getUser(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Able to fetch a User",
      err: error,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch a User",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const response = await userService.updateUser(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated a user",
      err: error,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a User",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
};
