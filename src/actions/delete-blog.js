const makeDeleteBlog = ({ blogDB }) => {
  return async id => {
    return await blogDB.remove(id);
  };
};

module.exports = makeDeleteBlog;
