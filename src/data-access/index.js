const { Blog } = require("./../models");
const makeBlogDb = require("./blogs-db");
module.exports = makeBlogDb({ Blog });
