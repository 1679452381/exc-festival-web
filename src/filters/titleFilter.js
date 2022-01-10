const titleFilter = function (title) {
    return title.length > 30 ? title.substr(1, 30) + '...' : title

}
export default titleFilter