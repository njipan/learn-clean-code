const makeCreateBlog = ({ createBlog, validatorErrorTransform }) => {
  return async ({ httpRequest, validator }) => {
    try {
      const { title, email, phoneNumber } = httpRequest.body;
      const { error } = validator.validate({
        title,
        email,
        phoneNumber
      });
      if (error && error.details) {
        return {
          body: validatorErrorTransform(error.details),
          statusCode: 422
        };
      }

      const blog = await createBlog({
        title,
        email,
        phoneNumber
      });

      return {
        body: blog,
        statusCode: 200
      };
    } catch (err) {
      return {
        statusCode: 422
      };
    }
  };
};

module.exports = makeCreateBlog;
