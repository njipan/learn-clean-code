const Sequelize = require("sequelize");
const makeSequelize = require("./sequelize");
const sequelize = makeSequelize({ Sequelize });

module.exports = {
  sequelize
};
