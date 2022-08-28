const query = require("../../dbClient/sqlConnection");

const createNewUser = async (newUser) => {
  try {
    const { username, password } = newUser
    const { insertId } = await query(`insert into user (username, password) values ("${username}", "${password}")`)
    return { _id: insertId, username, password }
  } catch (e) {
    console.log(e);
  }
};

const getUserByUsername = async (username) => {
  try {
    const [ user ] = await query(`select * from user where username = "${username}"`)
    return user
      ? { _id: user.id, username: user.username, password: user.password }
      : null;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createNewUser, getUserByUsername };
