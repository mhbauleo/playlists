const Songs = require("../../models/SongsModel");

const addSong = async (newSong) => {
  try {
    return await Songs.create(newSong);
  } catch (e) {
    console.log(e);
  }
};

const getAllSongs = async () => {
  try {
    return await Songs.find({});
  } catch (e) {
    console.log(e);
  }
};

const getSongById = async (songId) => {
  try {
    return await Songs.findById(songId);
  } catch (e) {
    console.log(e);
  }
};

const updateSongById = async (songId, newSong) => {
  try {
    return await Songs.updateOne(
      {
        _id: songId,
      },
      newSong
    );
  } catch (e) {
    console.log(e);
  }
};

const deleteSongById = async (songId) => {
  try {
    return await Songs.deleteOne({
      _id: songId,
    });
  } catch (e) {
    console.log(e);
  }
};

const getFilteredSongs = async (filters) => {
  try {
    return await Songs.find(filters);
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  addSong,
  getAllSongs,
  getSongById,
  updateSongById,
  deleteSongById,
  getFilteredSongs
};
