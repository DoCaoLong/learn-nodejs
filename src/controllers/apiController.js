const {
  getUsersService,
  postUsersService,
  putUsersService,
  deleteUsersService,
} = require("../services/userService");
const {
  uploadSingleFile,
  uploadMultipleFiles,
} = require("../services/fileService");

const getUsers = async (req, res) => {
  const results = await getUsersService();
  return res.status(200).json({
    EC: 0,
    data: results,
  });
};

const postUser = async (req, res) => {
  let data = req.body;
  const results = await postUsersService(data);
  return res.status(200).json({
    EC: 0,
    data: results,
  });
};

const putUser = async (req, res) => {
  let data = req.body;
  const results = await putUsersService(data);
  return res.status(200).json({
    EC: 0,
    data: results,
  });
};

const deleteUser = async (req, res) => {
  const results = await deleteUsersService(req.body.userId);
  return res.status(200).json({
    data: results,
  });
};

const postUploadSingleFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let result = await uploadSingleFile(req.files.image);
  return res.status(200).json(result);
};

const postUploadMultipleFiles = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  if (Array.isArray(req.files.image)) {
    let results = await uploadMultipleFiles(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: results,
    });
  } else {
    return await postUploadSingleFile(req, res);
  }
};

module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
  postUploadSingleFile,
  postUploadMultipleFiles,
};
