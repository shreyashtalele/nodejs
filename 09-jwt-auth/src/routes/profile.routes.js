const express = require("express")
const router = express.Router()
const authenticate = require("../middlewares/auth.middleware")
const getProfile = require("../controllers/profile.controller")


router.get(
    "/profile",
    authenticate,
    getProfile
)


module.exports = router