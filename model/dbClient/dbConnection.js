const mongoose = require("mongoose");
const config = require("../../../listas-de-reproduccion/config");

const dbConnection = async () => {
  try {
    if (config.DB === "MONGO") {
      console.log("mongo connection");
      await mongoose.connect(config.MONGO_BASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
