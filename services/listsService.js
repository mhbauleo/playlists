const { Lists } = require("../model/index");
const { filterSong } = require("../helpers/filter")

const createNewList = async (newList) => {
  return await Lists.createNewList(newList);
};

const getAllLists = async () => {
  return await Lists.getAllLists();
};

const getListById = async (listId) => {
  return await Lists.getListById(listId);
};

const deleteListById = async (listId) => {
  const { deletedCount } = await Lists.deleteListById(listId);
  return deletedCount;
};

const addSongToList = async (listId, songId) => {
  const { modifiedCount } = await Lists.addSongToList(listId, songId);
  return modifiedCount;
};

const getSongs = async (listId) => {
  const list = await Lists.getListById(listId);
  return list?.songs;
};

const deleteSong = async (listId, songId) => {
  const { modifiedCount } = await Lists.deleteSong(listId, songId);
  return modifiedCount;
};

const getFilteredSongs = async (listId, filters) => {
    const list = await Lists.getListById(listId)
    if(list) {
        const { songs } = list
        const filteredSongs = songs.filter(song => filterSong(song, filters))
        return filteredSongs
    } else {
        return null
    }
}

module.exports = {
  createNewList,
  getAllLists,
  getListById,
  deleteListById,
  addSongToList,
  getSongs,
  deleteSong,
  getFilteredSongs
};
