const connection = require("../config/database");
const {
  getAllUsers,
  getUser,
  _postUpdateUser,
  _postCreateUser,
  _postDeleteUser,
} = require("../services/CURDServices");
const getHomePage = async (req, res) => {
  const results = await getAllUsers();
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
  const results = await getUser(userId);
  res.render("edit.ejs", { user: results });
};

const postCreateUser = async (req, res) => {
  let data = req.body;
  await _postCreateUser(data);
  res.redirect("/");
};

const postUpdateUser = async (req, res) => {
  let data = req.body;
  await _postUpdateUser(data);
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.userId;
  await _postDeleteUser(userId);
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
