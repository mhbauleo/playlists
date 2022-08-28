const newListDTO = (_id, newList) => {
    return { _id, ...newList, songs: [] }
}

module.exports = { newListDTO }