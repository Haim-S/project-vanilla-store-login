const Joi = require("joi");

const shoeBodySchema = Joi.object({
    name: Joi.string().min(1).max(30).required(),
    price: Joi.number().min(400).required(),
    // type: Joi.string().valid('cloth', 'Leather', 'rubber'),
    manufacturer: Joi.string().required(),
});

module.exports = shoeBodySchema;