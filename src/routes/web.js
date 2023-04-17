// web.js: api phục vụ server side rendering
const express = require("express");
const router = express.Router();
const { getHomePage, getLongdc } = require("../controllers/homeController");

// router.Method('/router', handle)
router.get("/", getHomePage);
router.get("/longdc", getLongdc);

module.exports = router;
