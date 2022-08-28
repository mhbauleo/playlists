const config = require('../config')

const SongsFactory = require('./daos/songs/songsFactory')
const ListsFactory = require('./daos/lists/listsFactory')

const Songs = SongsFactory(config.DB)
const Lists = ListsFactory(config.DB)

module.exports = { Songs, Lists }