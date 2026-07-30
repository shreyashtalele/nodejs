const express = require("express")
const router = express.Router()

const authenticate = require("../middlewares/auth.middleware")
const { adminDashboard } = require('../controllers/admin.controller')
const { authorizeRole } = require('../middlewares/role.middleware')



router.get(
    '/admin/dashboard',
    authenticate,
    authorizeRole('admin'),
    adminDashboard

)

module.exports = router