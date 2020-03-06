const buildMakeBlog = ({ Id }) => {
  return function makeBlog({
    id = Id.make(),
    title,
    email,
    phoneNumber,
    createdAt = Date.now(),
    updatedAt = Date.now()
  } = {}) {
    return Object.freeze({
      getId: () => {
        return id;
      },
      getTitle: () => {
        return title;
      },
      getEmail: () => {
        return email;
      },
      getPhoneNumber: () => {
        return phoneNumber;
      },
      getCreatedAt: () => {
        return createdAt;
      },
      getUpdatedAt: () => {
        return updatedAt;
      }
    });
  };
};

module.exports = buildMakeBlog;
