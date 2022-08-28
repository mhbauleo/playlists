const ListsMongoDb = require("./listsMongoDb");
const ListsSQL = require("./listsSQL")

const ListsFactory = (type) => {
  switch (type) {
    case "MONGO":
      return ListsMongoDb;
    case "SQL":
      return ListsSQL;
    default:
      return ListsMongoDb;
  }
};

module.exports = ListsFactory;
