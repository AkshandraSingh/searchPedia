const wiki = require('wikipedia');

const searchOnPedia = async (prompt) => {
    try {
        const searchPage = await wiki.page(prompt);
        console.log(searchPage)
    } catch (error) {
        console.log(error);
    }
}

module.exports = searchOnPedia;
