const sequelize = require("../bin/dbConnection");
const users = require("./definitions/users");
const roles = require("./definitions/roles");

const models = { users, roles };

roles.hasMany(users, { foreignkey: "roleid" });
users.belongsto(roles, { foreignkey: "roleid" });

const db = {};

db.sequelize = sequelize;
sequelize.models = models;
module.exports = { db, models };
