const listsService = require("../services/listsService");

const createNewList = async (req, res) => {
  const createdList = await listsService.createNewList(req.body);
  res.status(201).json({ status: true, data: createdList });
};

const getAllLists = async (req, res) => {
  const allLists = await listsService.getAllLists();
  res.json({ status: true, data: allLists });
};

const getListById = async (req, res) => {
  const list = await listsService.getListById(req.params.listId);
  if (list) {
    res.json({ status: true, data: list });
  } else {
    res.status(404).json({ status: false });
  }
};

const deleteListById = async (req, res) => {
  const deletedCount = await listsService.deleteListById(req.params.listId);
  if (deletedCount === -1) return res.status(409).json({ status: false });
  if (deletedCount === -2) return res.status(500).json({ status: false });
  if (deletedCount > 0) {
    res.json({ status: true });
  } else {
    res.status(404).json({ status: false });
  }
};

const addSongToList = async (req, res) => {
  const count = await listsService.addSongToList(
    req.params.listId,
    req.params.songId
  );
  if (count > 0) {
    res.json({ status: true });
  } else {
    res.status(404).json({ status: false });
  }
};

const getSongs = async (req, res) => {
  const songs = await listsService.getSongs(req.params.listId);
  if (songs) {
    res.json({ status: true, data: songs });
  } else {
    res.status(404).json({ status: false });
  }
};

const deleteSong = async (req, res) => {
  const count = await listsService.deleteSong(
    req.params.listId,
    req.params.songId
  );
  if (count > 0) {
    res.json({ status: true });
  } else {
    res.status(404).json({ status: false });
  }
};

const getFilteredSongs = async (req, res) => {
  const songs = await listsService.getFilteredSongs(
    req.params.listId,
    req.query
  );
  if (songs) {
    res.json({ status: true, data: songs });
  } else {
    res.status(404).json({ status: false });
  }
};
module.exports = {
  createNewList,
  getAllLists,
  getListById,
  deleteListById,
  addSongToList,
  getSongs,
  deleteSong,
  getFilteredSongs,
};
