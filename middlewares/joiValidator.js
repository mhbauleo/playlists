const listsJoiSchema = require('../model/models/schemas/ListsJoiSchema')
const usersJoiSchema = require('../model/models/schemas/UsersJoiSchema')
const songsJoiSchema = require('../model/models/schemas/SongsJoiSchema')

const joiValidator = (req, res, next, joiSchema) => {
    const { error } = joiSchema.validate(req.body)
    if(error) {
        res.status(422).json({ status: false, message: error.details[0].message })
    } else {
        next()
    }
}

const listsJoiValidator = (req, res, next) => {
    joiValidator(req, res, next, listsJoiSchema)
}
const usersJoiValidator = (req, res, next) => {
    joiValidator(req, res, next, usersJoiSchema)
}
const songsJoiValidator = (req, res, next) => {
    joiValidator(req, res, next, songsJoiSchema)
}

module.exports = { listsJoiValidator, usersJoiValidator, songsJoiValidator }