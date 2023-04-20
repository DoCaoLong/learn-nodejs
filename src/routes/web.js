// web.js: api phục vụ server side rendering
const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getLongdc,
  postCreateUser,
  getCreate,
  getUpdate,
  postUpdateUser,
  postDeleteUser,
} = require("../controllers/homeController");

// router.Method('/router', controllers)
router.get("/", getHomePage);
router.get("/longdc", getLongdc);
router.post("/create-user", postCreateUser);
router.get("/create", getCreate);
router.get("/update/:userId", getUpdate);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:userId", postDeleteUser);

module.exports = router;
