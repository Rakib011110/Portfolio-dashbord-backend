const User = require("./user.model");

// Create a new user
const createUser = async (userData) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
