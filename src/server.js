require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const webRoute = require("./routes/web");

// config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoute);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
