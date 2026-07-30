const express = require('express')
const userRoutes = require('../src/routes/user.routes')
const profileRoutes = require('../src/routes/profile.routes')
const adminRoutes = require("./routes/admin.route")
const errorHandler = require('../src/middlewares/error.middleware')
const app = express()

app.use(express.json())
app.use('/api/auth', userRoutes)
app.use('/api', profileRoutes)
app.use('/api', adminRoutes)
app.use(errorHandler)

module.exports = app