var routes = require("express").Router();
const {
  create,
  getAll,
  getUser,
  deleteUser,
} = require("../controllers/userController");
const { getUser } = require("../models/userModel");
const { createUserSchema } = require("../validations/users");
routes.get("/get-all-users", getAll);
routes.post("/create-user", createUserSchema, create);
routes.get("/get-user", getUsername, getUser);
routes.delete("/delete-user", getUsername, deleteUser);
module.exports = routes;
