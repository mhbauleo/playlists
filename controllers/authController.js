const usersService = require("../services/authService");

const createNewUser = async (req, res) => {
  const { username, password } = req.body;
  const userCreated = await usersService.createNewUser(username, password);

  if (userCreated) {
    res.status(201).json({ status: true });
  } else {
    res.status(409).json({ status: false });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const jwt = await usersService.login(username, password);
  jwt
    ? res.json({ status: true, data: jwt })
    : res.status(401).json({ status: false });
};

module.exports = { createNewUser, login };
