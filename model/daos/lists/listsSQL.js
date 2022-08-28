const query = require("../../dbClient/sqlConnection");
const { newListDTO } = require("../../dtos/lists/listsDto");

const createNewList = async (newList) => {
  try {
    const { name, description } = newList;
    const { insertId } = await query(
      `insert into list (name, description) values ("${name}", "${description}")`
    );
    return newListDTO(insertId, newList);
  } catch (e) {
    console.log(e);
  }
};

const getAllLists = async () => {
  try {
    const rows =
      await query(`select l.id, l.name, l.description, s.id as songId, s.title, a.name as album, art.name as artist, s.year from list l 
      left join song_list s_l on l.id = s_l.list_id
      left join song s on s.id = s_l.song_id
      left join album a on a.id = s.album_id
      left join artist art on art.id = a.artist_id`);
    if (rows.length === 0) return rows;

    const rowsSplited = splitRows(rows);
    return rowsSplited.map((rows) => getListFromRows(rows));
  } catch (e) {
    console.log(e);
  }
};

const getListById = async (listId) => {
  try {
    const rows = await query(
      `select l.id, l.name, l.description, s.id as songId, s.title, a.name as album, art.name as artist, s.year from list l 
      left join song_list s_l on l.id = s_l.list_id
      left join song s on s.id = s_l.song_id
      left join album a on a.id = s.album_id
      left join artist art on art.id = a.artist_id
      where l.id = ${listId}`
    );

    if (rows.length === 0) return null;

    return getListFromRows(rows);
  } catch (e) {
    console.log(e);
  }
};

const deleteListById = async (listId) => {
  try {
    const { affectedRows } = await query(
      `delete from list where id = ${listId}`
    );
    return { deletedCount: affectedRows };
  } catch (e) {
    console.log(e);
    return e.errno === 1451 ? { deletedCount: -1 } : { deletedCount: -2 };
  }
};

const addSongToList = async (listId, songId) => {
  try {
    const { affectedRows } =  await query(
      `insert into song_list (song_id, list_id) values (${songId}, ${listId})`
    );
    return { modifiedCount: affectedRows }
  } catch (e) {
    console.log(e);
    return { modifiedCount : 0}
  }
};

const deleteSong = async (listId, songId) => {
  try {
    const { affectedRows } = await query(
      `delete from song_list where song_id = ${songId} and list_id = ${listId}`
    );
    return { modifiedCount: affectedRows };
  } catch (e) {
    console.log(e);
  }
};

function splitRows(rows) {
  const lists = {};
  for (const row of rows) {
    if (row.id in lists) {
      lists[row.id].push(row);
    } else {
      lists[row.id] = [row];
    }
  }
  return Object.values(lists);
}

function getListFromRows(rows) {
  const { id, name, description } = rows[0];

  return {
    _id: id,
    name,
    description,
    songs: rows[0].title
      ? rows.map((row) => {
          const { songId, title, album, artist, year } = row;
          return { _id: songId, title, album, artist, year };
        })
      : [],
  };
}

module.exports = {
  createNewList,
  getAllLists,
  getListById,
  deleteListById,
  addSongToList,
  deleteSong,
};
