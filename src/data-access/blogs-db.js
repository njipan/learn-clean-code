const makeBlogDb = ({ Blog }) => {
  const insert = async data => {
    return await Blog.create(data);
  };
  const remove = async ({ id }) => {
    return await Blog.destroy({
      where: { id }
    });
  };

  return Object.freeze({
    insert,
    remove
  });
};

module.exports = makeBlogDb;
