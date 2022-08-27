const { Songs } = require("../model/index");

const addSong = async (newSong) => {
  return await Songs.addSong(newSong);
};

const getAllSongs = async () => {
  return await Songs.getAllSongs();
};

const getSongById = async (songId) => {
  return await Songs.getSongById(songId);
};

const updateSongById = async (songId, newSong) => {
  const { modifiedCount } = await Songs.updateSongById(songId, newSong);
  return modifiedCount;
};

const deleteSongById = async (songId) => {
  const { deletedCount } = await Songs.deleteSongById(songId);
  return deletedCount;
};

const getFilteredSongs = async (filters) => {
  return await Songs.getFilteredSongs(filters)
}

module.exports = {
  addSong,
  getAllSongs,
  getSongById,
  updateSongById,
  deleteSongById,
  getFilteredSongs
};
