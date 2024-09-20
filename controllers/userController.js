const { createUser, getAllUsers, getUser } = require("../models/userModel");
const { getRole } = require("../models");
const responsHandler = require(".../responseHandler");
module.exports = {
  create: async (req, res) => {
    try {
      const role = await getRole(req.body);
      if (role.error) {
        return res.send({
          error: role.error,
        });
      }
      delete req.body.role;
      req.body.roleId = role.response.dataValues.roleId;
      const user = await createUser(req.body);
      responsHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const users = await getAllUsers();
      responsHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await getUser(req.query);
      responsHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await deleteUser(req.query);
      responsHandler(user, res);
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
