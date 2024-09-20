const routes = require("express").Router();
const {
  createstudent,
  getAll,
  del,
  getbyid,
} = require("../controllers/student");
const { createUserSchema } = require("../validations/users");
routes.get("/get-all-users", getAll);
routes.post("/create-user", createUserSchema, createstudent);
routes.delete("/delete", del);
routes.get("/getbyid", getbyid);
module.exports = routes;
