const { createBlog, deleteBlog } = require("./../actions");
const validatorErrorTransform = require("./../utils/validator-error-transform");
const makeCreateBlog = require("./create-blog");
const makeDeleteBlog = require("./delete-blog");

const addNewBlog = makeCreateBlog({ createBlog, validatorErrorTransform });
const deleteExistingBlog = makeDeleteBlog({
  deleteBlog,
  validatorErrorTransform
});

const blogService = Object.freeze({
  createBlog: addNewBlog,
  deleteBlog: deleteExistingBlog
});

module.exports = blogService;
