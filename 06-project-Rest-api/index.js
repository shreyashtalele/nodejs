const express = require("express");
const userRouter = require('./routes/user')
const { connectMongoDB } = require('./connection')
const { logReqRes } = require('./middlewares')

const app = express();
const PORT = 8000;

// ==============================
// MongoDB Connection
// ==============================

connectMongoDB("mongodb://127.0.0.1:27017/users")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// ==============================
// Middlewares
// ==============================
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logReqRes('log.txt'))

// ==============================
// Server
// ==============================

app.use("/user", userRouter)
app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});