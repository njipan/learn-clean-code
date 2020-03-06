const makeDeleteBlog = ({ deleteBlog }) => {
  return async ({ httpRequest }) => {
    let message = "Data successfully deleted!";
    try {
      const id = httpRequest.params.id;
      await deleteBlog({ id });

      return {
        body: {
          message
        },
        statusCode: 200
      };
    } catch (err) {
      message = "Error occured!";
      return {
        body: {
          message
        },
        statusCode: 422
      };
    }
  };
};

module.exports = makeDeleteBlog;
