const query = require("../../dbClient/sqlConnection");
const { songDTO, newSongDTO } = require("../../dtos/songs/songsDto");

const addSong = async (newSong) => {
  try {
    const { title, album, year } = newSong;
    await createAlbumIfNotExists(newSong);

    const { insertId } = await query(`
      insert into song (title, album_id, year) 
      values ("${title}", (select id from album where name = "${album}"), ${year});`);

    return newSongDTO(insertId, newSong);
  } catch (e) {
    console.log(e);
  }
};

const getAllSongs = async () => {
  try {
    const songs = await query(
      `select s.id, s.title, a.name as album, art.name as artist, s.year from song s 
     left join album a on s.album_id = a.id 
     left join artist art on a.artist_id = art.id`
    );

    return songs.map((song) => songDTO(song));
  } catch (e) {
    console.log(e);
  }
};

const getSongById = async (songId) => {
  try {
    const [song] = await query(
      `select s.id, s.title, a.name as album, art.name as artist, s.year from song s 
      left join album a on s.album_id = a.id 
      left join artist art on a.artist_id = art.id
      where s.id = ${songId}`
    );

    return song ? songDTO(song) : null;
  } catch (e) {
    console.log(e);
  }
};

const updateSongById = async (songId, newSong) => {
  try {
    const { title, album, year } = newSong;
    await createAlbumIfNotExists(newSong);

    const { affectedRows } = await query(
      `update song set 
        title = "${title}", 
        album_id = (select id from album where name = "${album}"),
        year = ${year} 
        where id = ${songId}`
    );
    return { modifiedCount: affectedRows };
  } catch (e) {
    console.log(e);
  }
};

const deleteSongById = async (songId) => {
  try {
    const { affectedRows } = await query(
      `delete from song where id = ${songId}`
    );
    return { deletedCount: affectedRows };
  } catch (e) {
    console.log(e);
    return e.errno === 1451 ? { deletedCount: -1 } : { deletedCount: -2 };
  }
};

const getFilteredSongs = async (filters) => {
  try {
    if (Object.entries(filters).length === 0) return getAllSongs();

    const where = [];
    for (key in filters) {
      console.log(typeof key);
      switch (key) {
        case "title":
          where.push(`s.title = "${filters[key]}"`);
          break;
        case "album":
          where.push(`a.name = "${filters[key]}"`);
          break;
        case "artist":
          where.push(`art.name = "${filters[key]}"`);
          break;
        case "year":
          where.push(`s.year = ${filters[key]}`);
          break;
        default:
          break;
      }
    }
    const sqlFilters = where.join(" and ");
    const songs = await query(
      `select s.id, s.title, a.name as album, art.name as artist, s.year from song s 
    left join album a on s.album_id = a.id 
    left join artist art on a.artist_id = art.id
    where ${sqlFilters}`
    );
    return songs.map((song) => songDTO(song));
  } catch (e) {
    console.log(e);
  }
};

async function createAlbumIfNotExists(newSong) {
  const { album, artist } = newSong;

  const [rowAlbum] = await query(
    `select id from album where name = "${album}"`
  );

  if (!rowAlbum) {
    const [rowArtist] = await query(
      `select id from artist where name = "${artist}"`
    );
    if (!rowArtist) {
      const { insertId } = await query(
        `insert into artist (name) values ("${artist}")`
      );
      await query(
        `insert into album (name, artist_id) values ("${album}", ${insertId} )`
      );
    } else {
      await query(
        `insert into album (name, artist_id) values ("${album}", ${rowArtist.id} )`
      );
    }
  }
}

module.exports = {
  addSong,
  getAllSongs,
  getSongById,
  updateSongById,
  deleteSongById,
  getFilteredSongs,
};
