function makeRequestCallback(controller, opt = {}) {
  return (httpRequest, res) => {
    controller({ httpRequest, validator: opt.validator || null })
      .then(httpResponse => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers);
        }
        res.code(httpResponse.statusCode);
        res.send(httpResponse.body);
      })
      .catch(err => {
        res.code(500);
      });
  };
}

module.exports = makeRequestCallback;
