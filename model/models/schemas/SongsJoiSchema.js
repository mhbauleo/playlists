const Joi = require('joi')

const songsJoiSchema = Joi.object({
    title : Joi.string().required(),
    artist : Joi.string().required(),
    album : Joi.string().required(),
    year : Joi.number().required()
})

module.exports = songsJoiSchema