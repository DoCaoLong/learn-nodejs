const User = require("../models/user");

module.exports = {
  getUsersService: async () => await User.find({}),
  postUsersService: async (data) =>
    await User.create({
      email: data.email,
      name: data.name,
      city: data.city,
    }),
  putUsersService: async (data) =>
    await User.updateOne(
      {
        _id: data._id,
      },
      {
        email: data.email,
        name: data.name,
        city: data.city,
      }
    ),
  deleteUsersService: async (id) => await User.deleteOne({ _id: id }),
};
