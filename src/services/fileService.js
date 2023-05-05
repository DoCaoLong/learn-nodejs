const path = require("path");

const uploadSingleFile = async (fileObject) => {
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  let extName = path.extname(fileObject.name); // -> .jpg
  let baseName = path.basename(fileObject.name, extName); // -> nameImage
  let finalName = `${baseName}-${Date.now()}${extName}`; // -> nameImage-11341233121.jpg
  let finalPatch = `${uploadPath}/${finalName}`; // -> ../public/images/upload/nameImage-11341233121.jpg
  try {
    await fileObject.mv(finalPatch); // -> move các file tới thư mục ./public/images/upload
    return {
      status: "success",
      path: finalName,
      error: null,
    };
  } catch (err) {
    console.log("check err :>> ", err);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};

const uploadMultipleFiles = async (fileArr) => {
  try {
    // lấy vị trí tuyệt đối của image và cho vào thư mục upload trong public
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    let resultsArr = [];
    let countSuccess = 0;
    // vì fillArr là 1 arr nên loop qua các phần tử
    for (let i = 0; i < fileArr.length; i++) {
      // lấy tên, format lại tên và patch từng item
      let extName = path.extname(fileArr[i].name); // -> .jpg
      let baseName = path.basename(fileArr[i].name, extName); // -> 1
      let finalName = `${baseName}-${Date.now()}${extName}`; // 1-11341233121.jpg
      let finalPatch = `${uploadPath}/${finalName}`;
      try {
        await fileArr[i].mv(finalPatch); // -> move các file tới thư mục ./public/images/upload
        resultsArr.push({
          status: "success",
          path: finalName,
          filename: fileArr[i].name,
          error: null,
        });
        countSuccess++;
      } catch (error) {
        resultsArr.push({
          status: "failed",
          path: null,
          filename: fileArr[i].name,
          error: JSON.stringify(error),
        });
      }
    }
    return {
      countSuccess: countSuccess,
      detail: resultsArr,
    };
  } catch (err) {
    console.log("check err :>> ", err);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};

module.exports = { uploadMultipleFiles, uploadSingleFile };
