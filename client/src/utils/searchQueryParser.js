const searchQueryParser = (searchQuery) => {
    let searchQueryArr = searchQuery.split('&');
    let args = {};

    searchQueryArr.forEach(arg => {
        let kv = arg.split('=');
        args[kv[0].trim()] = kv[1];
    })

    return args;

}

export default searchQueryParser;