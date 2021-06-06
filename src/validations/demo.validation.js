const Joi = require('joi');

const getDemo = {
  query: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = {
  getDemo,
};
