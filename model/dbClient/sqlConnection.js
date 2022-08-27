const mysql = require("mysql");
const util = require("util");
const config = require("../../config");

let conn;
let query;
try {
  if (config.DB === "SQL") {
    console.log("sql connection");
    conn = mysql.createConnection({
      host: config.SQL_HOST,
      user: config.SQL_USER,
      password: config.SQL_PASSWORD,
      database: config.SQL_DATABASE,
    });
    query = util.promisify(conn.query).bind(conn);
  }
} catch (e) {
  console.log(e);
}

module.exports = query;
