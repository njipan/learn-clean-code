const blogDB = require("./../data-access");
const makeCreateBlog = require("./create-blog");
const makeDeleteBlog = require("./delete-blog");

const createBlog = makeCreateBlog({ blogDB });
const deleteBlog = makeDeleteBlog({ blogDB });

module.exports = {
  createBlog,
  deleteBlog
};
