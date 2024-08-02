var routes = require("express").Router();

routes.get("/create", (req, res) => {
  res.send("create user Api");
});
routes.get("/update", (req, res) => {
  res.send("update user Api");
});
routes.get("/post", (re, res) => {
  res.send("post user Api");
});
routes.get("/put", (req, res) => {
  res.send("put user Api");
});
routes.get("/delete", (req, res) => {
  res.send("delete user Api");
});
module.exports = routes;
