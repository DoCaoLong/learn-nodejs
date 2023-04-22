const mongoose = require("mongoose");
require("dotenv").config();

const dbState = [
  {
    value: 0,
    label: "Disconnected",
  },
  {
    value: 1,
    label: "Connected",
  },
  {
    value: 2,
    label: "Connecting",
  },
  {
    value: 3,
    label: "Disconnecting",
  },
];

const connection = async () => {
  const options = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
  };
  await mongoose.connect(process.env.DB_HOST, options);
  // c2
  // await mongoose.connect("mongodb://root:123456@localhost:27018");
  const state = Number(mongoose.connection.readyState);
  console.log(dbState.find((item) => item.value == state).label, "to Database"); // connected to db
};

module.exports = connection;
