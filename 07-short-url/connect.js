const moongose = require('mongoose')

async function connectToMongoDB(url) {
    return moongose.connect(url)
}

module.exports = {
    connectToMongoDB,
}