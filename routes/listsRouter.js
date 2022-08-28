const express = require("express");
const router = express.Router();

const listsController = require("../controllers/listsController");

router.get('/:listId/songs/search', listsController.getFilteredSongs)
router.post('/:listId/songs/:songId', listsController.addSongToList)
router.get('/:listId/songs', listsController.getSongs)
router.delete('/:listId/songs/:songId', listsController.deleteSong)

router.post("/", listsController.createNewList);
router.get("/", listsController.getAllLists);
router.get("/:listId", listsController.getListById);
router.delete("/:listId", listsController.deleteListById);

module.exports = router;
