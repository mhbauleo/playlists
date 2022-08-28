const Lists = require("../../models/ListsModel");
const Songs = require("../../models/SongsModel");

const createNewList = async (newList) => {
  try {
    const { name, description } = newList;
    return await Lists.create({ name, description, songs: [] });
  } catch (e) {
    console.log(e);
  }
};

const getAllLists = async () => {
  try {
    return await Lists.find({});
  } catch (e) {
    console.log(e);
  }
};

const getListById = async (listId) => {
  try {
    return await Lists.findById(listId);
  } catch (e) {
    console.log(e);
  }
};

const deleteListById = async (listId) => {
  try {
    return await Lists.deleteOne({
      _id: listId,
    });
  } catch (e) {
    console.log(e);
  }
};

const addSongToList = async (listId, songId) => {
  try {
    const song = await Songs.findById(songId);
    if (song) {
      return await Lists.updateOne({ _id: listId }, { $push: { songs: song } });
    } else {
      return { modifiedCount: 0 };
    }
  } catch (e) {
    console.log(e);
  }
};

const deleteSong = async (listId, songId) => {
  try {
    return await Lists.updateOne(
      {
        _id: listId,
      },
      { $pull: { songs: { _id: songId } } }
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createNewList,
  getAllLists,
  getListById,
  deleteListById,
  addSongToList,
  deleteSong,
};
