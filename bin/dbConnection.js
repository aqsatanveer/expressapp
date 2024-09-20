require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  database: process.env.DB_NAME,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected with database successfully.");
  })
  .catch((error) => {
    console.log("Failed to connect database", error);
  });

module.exports = sequelize;
