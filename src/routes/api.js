// api: handle restfull api
const express = require("express");
const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/apiController");
const router = express.Router();

router.get("/users", getUsers);
router.post("/user", postUser);
router.put("/user", putUser);
router.delete("/user", deleteUser);

module.exports = router;
