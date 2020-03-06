module.exports = ({ Joi }) => {
  return Joi.object({
    title: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    phoneNumber: Joi.string().required()
  }).options({ abortEarly: false });
};
