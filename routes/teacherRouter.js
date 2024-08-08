var routes = require("express").Router();
const { create, getAll, del } = require("../controllers/teacher");
const { createUserSchema } = require("../validations/users");
routes.get("/get-all-users", getAll);
routes.post("/create-user", createUserSchema, create);
routes.delete("/delete", del);
module.exports = routes;
