const express = require('express')
const router = express.Router()

const songsController = require('../controllers/songsController')
const { auth } = require('../middlewares/auth')
const { songsJoiValidator } = require('../middlewares/joiValidator')
 
router.post('/', auth, songsJoiValidator, songsController.addSong)
router.get('/', auth, songsController.getAllSongs)
router.get('/search', auth, songsController.getFilteredSongs)
router.get('/:songId', auth, songsController.getSongById)
router.put('/:songId', auth, songsJoiValidator, songsController.updateSongById)
router.delete('/:songId', auth, songsController.deleteSongById)

module.exports = router