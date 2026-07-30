const express = require('express');
const { connectToMongoDB } = require('./connect')
const urlRoute = require('./routes/url')
const URL = require('./models/url')
const PORT = 8001

const app = express()
app.use(express.json())
app.use("/url", urlRoute)
connectToMongoDB('mongodb://127.0.0.1:27017/shorturl').then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));


app.listen(PORT, (error) => {
    if (error) {
        console.log("Server Failed to start :: ", error)
    } else {
        console.log("server started ")
    }
})