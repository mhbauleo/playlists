const { verifyJWT } = require("../helpers/jwt");

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(400).json({ status: false });
    const token = authorization.split(" ")[1];
    if (!token) return res.status(400).json({ status: false });
    if (verifyJWT(token)) next();
  } catch (e) {
    console.log(e);
    res.status(401).json({ status: false });
  }
};

module.exports = { auth };
