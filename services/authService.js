const { Users } = require("../model/index");
const { createHash, isValidPassword } = require("../helpers/bcrypt");
const { createJWT } = require("../helpers/jwt");

/* If the user already exists, it returns null */
const createNewUser = async (username, password) => {
  const user = await Users.getUserByUsername(username);
  if (user) return null;

  return await Users.createNewUser({
    username,
    password: await createHash(password),
  });
};

const login = async (username, password) => {
  try {
    const user = await Users.getUserByUsername(username);
    if (user && (await isValidPassword(user, password))) {
      const { _id, username } = user;
      const jwt = createJWT({ _id, username });
      return jwt;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createNewUser, login };
