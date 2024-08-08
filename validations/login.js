const { login } = require("../controllers/authController");
const { create, getAll } = require("../controllers/userController");
const { createUserSchema } = require("../validations/users");
var routes = require("express").Router();
routes.post("/login", createUser, Login);
routes.delete("/logout", Logout);

module.exports = routes;
