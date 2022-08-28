const Joi = require('joi')

const listsJoiSchema = Joi.object({
    name : Joi.string().required(),
    description : Joi.string().required()
})

module.exports = listsJoiSchema