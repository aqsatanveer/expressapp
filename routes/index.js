var routes = require("express").Router();

routes.get("/getHome", (req, res) => {
  return res.send("welcome to home pgae");
});

module.exports = routes;
// router changed to rotes
