const makeBlog = require("./../blogs");

const makeCreateBlog = ({ blogDB }) => {
  return async function createBlog(blogInfo) {
    const blog = makeBlog(blogInfo);
    console.log("XXX");
    return await blogDB.insert({
      title: blog.getTitle(),
      email: blog.getEmail(),
      phoneNumber: blog.getPhoneNumber(),
      createdAt: blog.getCreatedAt(),
      updatedAt: blog.getUpdatedAt()
    });
  };
};

module.exports = makeCreateBlog;
