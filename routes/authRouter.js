var routes = require("express").Router();
const { login, logout } = require("../controllers/authController");
routes.get("/login", login);
routes.post("/logout", logout);

module.exports = routes;
