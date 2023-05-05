// api: handle restfull api
const express = require("express");
const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
  postUploadSingleFile,
  postUploadMultipleFiles,
} = require("../controllers/apiController");
const {
  postCreateCustomer,
  postCreateArrCustomer,
  getCustomers,
  getCustomer,
  putCustomer,
  deleteCustomer,
  deleteCustomers,
} = require("../controllers/customerController");
const router = express.Router();

router.get("/users", getUsers);
router.post("/user", postUser);
router.put("/user", putUser);
router.delete("/user", deleteUser);

router.post("/file", postUploadSingleFile);
router.post("/files", postUploadMultipleFiles);

router.post("/customers", postCreateCustomer);
router.post("/customers-many", postCreateArrCustomer);
router.get("/customers", getCustomers);
router.get("/customer", getCustomer);
router.put("/customer", putCustomer);
router.delete("/customer", deleteCustomer);
router.delete("/customers-many", deleteCustomers);

// router.get("/info", (req, res) => {
//   return res.status(200).json({
//     data: req.query,
//   });
// });
router.get("/info/:name/:email", (req, res) => {
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = router;
