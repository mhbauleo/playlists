const songDTO = (song) => {
  const { title, album, artist, year } = song;
  return { _id: song.id, title, album, artist, year };
};

const newSongDTO = (_id, newSong) => {
    return { _id, ...newSong }
}

module.exports = { songDTO, newSongDTO }