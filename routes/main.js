const express = require('express')
const router = express.Router()

const routerLists = require('./listsRouter')
const routerSongs = require('./songsRouter')

router.use('/api/songs', routerSongs)
router.use('/api/lists', routerLists)

module.exports = router