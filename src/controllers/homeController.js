const getHomePage = (res, req) => {
  res.send("Hello World LongDC!");
};
const getLongdc = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getLongdc,
};
