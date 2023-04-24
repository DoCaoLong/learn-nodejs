const User = require("../models/user");

const getUsers = async (req, res) => {
  const results = await User.find({});
  return res.status(200).json({
    EC: 0,
    data: results,
  });
};

const postUser = async (req, res) => {
  let data = req.body;
  const results = await User.create({
    email: data.email,
    name: data.name,
    city: data.city,
  });
  return res.status(200).json({
    EC: 0,
    data: results,
  });
};

const putUser = async (req, res) => {
  let data = req.body;
  const results = await User.updateOne(
    {
      _id: data.userId,
    },
    {
      email: data.email,
      name: data.name,
      city: data.city,
    }
  );
  return res.status(200).json({
    EC: 0,
    data: results,
  });
};

const deleteUser = async (req, res) => {
  const results = await User.deleteOne({ _id: req.body.userId });
  return res.status(200).json({
    data: results,
  });
};

module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
};
