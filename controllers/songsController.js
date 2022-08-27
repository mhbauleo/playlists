const songsService = require("../services/songsService");

const addSong = async (req, res) => {
  const createdSong = await songsService.addSong(req.body);
  res.status(201).json({ status: true, data: createdSong });
};

const getAllSongs = async (req, res) => {
  const allSongs = await songsService.getAllSongs();
  res.json({ status: true, data: allSongs });
};

const getSongById = async (req, res) => {
  const song = await songsService.getSongById(req.params.songId);
  if (song) {
    res.json({ status: true, data: song });
  } else {
    res.status(404).json({ status: false });
  }
};

const updateSongById = async (req, res) => {
  const modifiedCount = await songsService.updateSongById(
    req.params.songId,
    req.body
  );
  if (modifiedCount > 0) {
    res.json({ status: true });
  } else {
    res.status(404).json({ status: false });
  }
};

const deleteSongById = async (req, res) => {
  const deletedCount = await songsService.deleteSongById(req.params.songId);
  if(deletedCount === -1) return res.status(409).json({ status: false })
  if(deletedCount === -2) return res.status(500).json({ status: false })
  if (deletedCount > 0) {
    res.json({ status: true });
  } else {
    res.status(404).json({ status: false });
  }
};

const getFilteredSongs = async (req, res) => {
    const songs = await songsService.getFilteredSongs(req.query);
    res.json({ status: true, data: songs })
}

module.exports = {
  addSong,
  getAllSongs,
  getSongById,
  updateSongById,
  deleteSongById,
  getFilteredSongs
};
