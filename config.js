const dotenv = require("dotenv");
dotenv.config();

const config = {
  PORT: process.env.PORT || 8080,
  DB: process.env.DB,
  MONGO_BASE_URL: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.s1kle.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
};

module.exports = config;
