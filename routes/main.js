const express = require('express')
const router = express.Router()

const routerSongs = require('./songsRouter')

router.use('/api/songs', routerSongs)

module.exports = router