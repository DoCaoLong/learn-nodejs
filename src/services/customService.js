const Customer = require("../models/customer");

module.exports = {
  createCustomer: async (data) => {
    try {
      const result = await Customer.create({
        name: data.name,
        address: data.address,
        phone: data.phone,
        email: data.email,
        description: data.description,
        image: data.image,
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  createArrCustomer: async (arr) => {
    try {
      let result = await Customer.insertMany(arr);
      return result;
    } catch (error) {
      console.log("error >>>", error);
      return error;
    }
  },

  getListCustomer: async () => {
    try {
      const result = await Customer.find({});
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  getCustomerById: async (data) => {
    console.log(data);
    try {
      const result = await Customer.findOne({ _id: data.id });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  updateCustomer: async (data) => {
    try {
      const result = await Customer.updateOne(
        { _id: data.id },
        {
          name: data.name,
          address: data.address,
          phone: data.phone,
          email: data.email,
          description: data.description,
        }
      );
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  removeCustomerById: async (data) => {
    try {
      const result = await Customer.deleteById(data.id);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  removeArrCustomerById: async (arr) => {
    try {
      const result = await Customer.delete({ _id: { $in: arr } });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
