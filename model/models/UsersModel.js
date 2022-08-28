const mongoose = require('mongoose')
const UserSchema = require('./schemas/UsersMongoSchema')

module.exports = mongoose.model('Users', UserSchema)