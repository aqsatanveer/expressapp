const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const { v4: uuid } = require("uuid");
const { hash } = require("bcrypt");
class users extends Model {}

users.init(
  {
    userId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(34),
      unique: true,
      allowNull: false,
    },
    password: { type: DataTypes.STRING(256), allowNull: false },
  },
  
  roleId: {
    type: Datatypes.STRING(255),
    allowNull: false,
    references: {
    model: roles,
    key: "roleId",
    },
  },

  {
    timestamps: true,
    paranoid: true,
    modelName: "users",
    sequelize,
  }
);

users.beforeCreate(async (user) => {
  user.userId = uuid();
  users.password = await hash("passwsord", 10);
});

users.afterCreate(async (user) => {
  console.log("user", user);
  delete user.dataValues.password;
});

module.exports = users;
