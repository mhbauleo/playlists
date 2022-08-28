const mongoose = require('mongoose')
const SongSchema = require('./SongsMongoSchema')

const ListSchema = new mongoose.Schema({
    name : { type: String, required: true },
    description : { type: String, required: true },
    songs : [SongSchema]
})

module.exports = ListSchema