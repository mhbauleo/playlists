const express = require("express");
const router = express.Router();

const listsController = require("../controllers/listsController");
const { auth } = require('../middlewares/auth')

router.get('/:listId/songs/search', auth, listsController.getFilteredSongs)
router.post('/:listId/songs/:songId', auth, listsController.addSongToList)
router.get('/:listId/songs', auth, listsController.getSongs)
router.delete('/:listId/songs/:songId', auth, listsController.deleteSong)

router.post("/", auth, listsController.createNewList);
router.get("/", auth, listsController.getAllLists);
router.get("/:listId", auth, listsController.getListById);
router.delete("/:listId", auth, listsController.deleteListById);

module.exports = router;
