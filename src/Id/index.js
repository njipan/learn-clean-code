const { uuid, isUuid } = require("uuidv4");

const Id = Object.freeze({
  make: () => uuid(),
  isValid: isUuid
});

module.exports = Id;
