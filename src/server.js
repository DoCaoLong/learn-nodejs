require("dotenv").config();
const cors = require('cors');
const express = require("express");
const app = express();
const configViewEngine = require("./config/viewEngine");
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const webRoute = require("./routes/web");
const fileUpload = require("express-fileupload");
const apiRoute = require("./routes/api");
const connection = require("./config/database");

// config file upload
// default options
// config file upload
// default options
app.use(fileUpload());
app.use(cors({
  origin: '*'
}));

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// config template engine
configViewEngine(app);

// khai báo route
app.use("/", webRoute);
app.use("/v1/api", apiRoute);

// test connection mongoose
(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log("Conection Error", error);
  }
})();
