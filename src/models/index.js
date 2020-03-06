const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./../drivers/db");
const makeBlogModel = require("./blog");
const Blog = makeBlogModel({ sequelize, Sequelize, DataTypes });

module.exports = {
  Blog
};
