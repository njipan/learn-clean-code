module.exports = error => {
  return error.reduce((acc, detail) => {
    const obj = { ...acc };
    obj[detail.path[0]] = detail.message.replace(new RegExp('\\"', "gm"), "");
    return { ...obj };
  }, {});
};
