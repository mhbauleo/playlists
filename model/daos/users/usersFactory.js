const UsersMongoDb = require("./usersMongoDb");
const UsersSQL = require("./usersSQL")

const UsersFactory = (type) => {
  switch (type) {
    case "MONGO":
      return UsersMongoDb;
    case "SQL":
      return UsersSQL;    
    default:
      return UsersMongoDb;
  }
};

module.exports = UsersFactory;
