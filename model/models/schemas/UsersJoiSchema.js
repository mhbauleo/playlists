const Joi = require('joi')

const usersJoiSchema = Joi.object({
    username : Joi.string().required(),
    password : Joi.string().required()
})

module.exports = usersJoiSchema