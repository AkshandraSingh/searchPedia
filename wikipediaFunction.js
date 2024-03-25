const wiki = require('wikipedia');

const searchOnPedia = async (prompt) => {
    try {
        const searchPage = await wiki.page(prompt);
        const summary = await searchPage.summary()
        const summaryExtract = summary.extract
        return summaryExtract
    } catch (error) {
        console.log(error);
    }
}

module.exports = searchOnPedia;
