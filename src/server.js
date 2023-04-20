require("dotenv").config();
const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const webRoute = require("./routes/web");

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoute);

app.listen(port, hostname, () => {
  console.log(`Server running on port ${port}`);
});
