const config = require('../config')

const SongsFactory = require('./daos/songs/songsFactory')
const ListsFactory = require('./daos/lists/listsFactory')
const UsersFactory = require('./daos/users/usersFactory')

const Songs = SongsFactory(config.DB)
const Lists = ListsFactory(config.DB)
const Users = UsersFactory(config.DB)

module.exports = { Songs, Lists, Users }