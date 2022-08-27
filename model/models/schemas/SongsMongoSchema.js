const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    title : { type: String, required: true },
    artist : { type: String, required: true },
    album : { type: String, required: true },
    year : { type: Number, required: true }
})

module.exports = SongSchema