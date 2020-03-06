const Joi = require("@hapi/joi");
const transform = require("./../utils/validator-error-transform");

const makeCreateBlog = require("./create-blog");
module.exports = {
  createBlog: makeCreateBlog({ Joi, transform })
};
