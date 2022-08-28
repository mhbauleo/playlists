const express = require('express')
const router = express.Router()

const routerLists = require('./listsRouter')
const routerSongs = require('./songsRouter')
const routerAuth = require('./authRouter')

router.use('/api/songs', routerSongs)
router.use('/api/lists', routerLists)
router.use('/', routerAuth)

module.exports = router