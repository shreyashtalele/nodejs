const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const app = require('./app')



const PORT = process.env.PORT || 8000

const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`server started on ${PORT}`);

        })
    } catch (error) {
        console.log(error.message);

    }
}

startServer()