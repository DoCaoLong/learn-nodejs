const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const customerShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: String,
    address: String,
    image: String,
    phone: String,
    description: String,
  },
  {
    timestamps: true, // created at, update at
    // định nghĩa method
    // statics: {
    //   deleteArr(arr) {
    //     arr.forEach((item) => item.deleteById(item.id));
    //   },
    // },
  }
);

customerShema.plugin(mongoose_delete, { overrideMethods: "all" });

const Customer = mongoose.model("customer", customerShema);

module.exports = Customer;
