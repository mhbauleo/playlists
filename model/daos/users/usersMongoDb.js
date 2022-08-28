const Users = require("../../models/UsersModel");

const createNewUser = async (newUser) => {
  try {
    return await Users.create(newUser);
  } catch (e) {
    console.log(e);
  }
};

const getUserByUsername = async (username) => {
  try {
    return await Users.findOne({ username });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createNewUser, getUserByUsername };
