const titleFilter = function (title) {
    // console.log(title);
    if (title.length > 30) {
        return title.substr(1, 30) + '...'
    }
    return title

}
export default titleFilter