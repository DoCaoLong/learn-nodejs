// services la noi chua cac cau query toi db
const connection = require("../config/database");

// getAll Users
const getAllUsers = async () => {
  let [results, fields] = await connection.query(`SELECT * FROM Users`);
  return results;
};

// get User by ID
const getUser = async (userId) => {
  let [results, fields] = await connection.query(
    `SELECT * FROM Users WHERE id = ?`,
    [userId]
  );
  return results.length > 0 ? results[0] : {};
};

// create User
const _postCreateUser = async (data) => {
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
    [data.email, data.name, data.city]
  );
  return results;
};

// update user by id
const _postUpdateUser = async (data) => {
  let [results, fields] = await connection.query(
    `UPDATE Users SET email = ?,name = ?, city = ? WHERE id = ?`,
    [data.email, data.name, data.city, data.userId]
  );
  return results;
};

//detele user by id
const _postDeleteUser = async (userId) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id = ?`,
    [userId]
  );
  return results;
};

module.exports = {
  getAllUsers,
  getUser,
  _postUpdateUser,
  _postCreateUser,
  _postDeleteUser,
};
