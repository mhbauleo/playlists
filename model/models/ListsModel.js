const mongoose = require('mongoose')
const ListSchema = require('./schemas/ListsMongoSchema')

module.exports = mongoose.model('Lists', ListSchema)