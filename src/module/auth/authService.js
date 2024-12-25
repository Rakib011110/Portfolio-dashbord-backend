const jwt = require("jsonwebtoken");
const User = require("../user/user.model");
const bcrypt = require("bcryptjs");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email, password });

    console.log(user);
    if (!user) {
      throw new Error("User not found");
    }

    const ispasswordMatch = await bcrypt.compare(password, user.password);

    if (ispasswordMatch) {
      throw new Error("Invalid password");
    }

    const token = generateToken(user);
    console.log(token);
    return { user, token };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { loginUser };
