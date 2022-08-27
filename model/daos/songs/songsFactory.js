const SongsMongoDb = require("./songsMongoDb");
const SongsSQL = require("./songsSQL")

const SongsFactory = (type) => {
  switch (type) {
    case "MONGO":
      return SongsMongoDb;
    case "SQL":
      return SongsSQL;
    default:
      return SongsMongoDb;
  }
};

module.exports = SongsFactory;
