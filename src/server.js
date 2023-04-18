require("dotenv").config();
const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const webRoute = require("./routes/web");
const mysql = require("mysql2");

// config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoute);

// create the connection do DB
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, // default 3306
  user: "root", // default empty
  password: "123456",
  database: "hoidanit",
});

// simple query
connection.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log("results >>", results); // results contains rows returned by server
  console.log("fields >>", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
