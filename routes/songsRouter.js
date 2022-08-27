const express = require('express')
const router = express.Router()

const songsController = require('../controllers/songsController')
 
router.post('/', songsController.addSong)
router.get('/', songsController.getAllSongs)
router.get('/search', songsController.getFilteredSongs)
router.get('/:songId', songsController.getSongById)
router.put('/:songId', songsController.updateSongById)
router.delete('/:songId', songsController.deleteSongById)

module.exports = router