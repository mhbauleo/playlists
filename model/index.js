const config = require('../config')

const SongsFactory = require('./daos/songs/songsFactory')

const Songs = SongsFactory(config.DB)

module.exports = { Songs }