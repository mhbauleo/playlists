const filterSong = (song, filters) => {
    let res = true
    for(key in filters) {
        res = res && (key in song && song[key] == filters[key])
    }
    return res
}

module.exports = { filterSong }