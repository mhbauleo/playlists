const mongoose = require('mongoose')
const SongSchema = require('./schemas/SongsMongoSchema')

module.exports = mongoose.model('Songs', SongSchema)