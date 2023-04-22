const connection = require("../config/database");
const {
  getAllUsers,
  getUser,
  _postUpdateUser,
  _postCreateUser,
  _postDeleteUser,
} = require("../services/CURDServices");
const User = require("../models/user");
const getHomePage = async (req, res) => {
  const results = await User.find({});
  res.render("home.ejs", { listUsers: results });
};

const getLongdc = (req, res) => {
  res.render("sample.ejs");
};

const getCreate = (req, res) => {
  res.render("create.ejs");
};

const getUpdate = async (req, res) => {
  const userId = req.params.userId;
  // const results = await getUser(userId);
  const results = await User.findById(userId).exec();
  res.render("edit.ejs", { user: results });
};

const postCreateUser = async (req, res) => {
  let data = req.body;
  // await _postCreateUser(data);
  await User.create({
    email: data.email,
    name: data.name,
    city: data.city,
  });
  res.redirect("/");
};

const postUpdateUser = async (req, res) => {
  let data = req.body;
  // await _postUpdateUser(data);
  await User.updateOne(
    { _id: data.userId },
    {
      email: data.email,
      name: data.name,
      city: data.city,
    }
  );

  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.userId;
  // await _postDeleteUser(userId);
  let result = await User.deleteOne({ _id: userId });
  console.log("result", result);
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getLongdc,
  postCreateUser,
  getCreate,
  getUpdate,
  postUpdateUser,
  postDeleteUser,
};
