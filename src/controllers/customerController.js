const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomer,
  createArrCustomer,
  getListCustomer,
  updateCustomer,
  getCustomerById,
  removeCustomerById,
  removeArrCustomerById,
} = require("../services/customService");
module.exports = {
  // create 1 customer
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let imageUrl = "";
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    } else {
      let imageUpload = await uploadSingleFile(req.files.image);
      imageUrl = imageUpload.path;
      const params = {
        name,
        address,
        phone,
        email,
        description,
        image: imageUrl,
      };
      const data = await createCustomer(params);
      return res.status(200).json({
        EC: 0,
        data: data,
      });
    }
  },

  // create > 1 customer
  postCreateArrCustomer: async (req, res) => {
    let customers = await createArrCustomer(req.body.customers);
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(400).json({
        EC: -1,
        data: customers,
      });
    }
  },

  getCustomers: async (req, res) => {
    const result = await getListCustomer();
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  getCustomer: async (req, res) => {
    const a = req.body;
    console.log(a);
    const result = await getCustomerById(req.body);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },

  putCustomer: async (req, res) => {
    const result = await updateCustomer(req.body);
    try {
      return res.status(200).json({
        status: "Update Success",
        EC: 0,
        data: result,
      });
    } catch (error) {
      return res.status(404).json({
        status: "Update Failed",
        EC: -1,
        data: result,
      });
    }
  },

  deleteCustomer: async (req, res) => {
    const result = await removeCustomerById(req.body);
    return res.status(200).json({
      status: "Delete Success",
      EC: 0,
      data: result,
    });
  },

  deleteCustomers: async (req, res) => {
    const result = await removeArrCustomerById(req.body.customersId);
    return res.status(200).json({
      status: "success",
      EC: 0,
      data: result,
    });
  },
};
