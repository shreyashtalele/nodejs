const express = require("express");
const router = express.Router();

const {
    hanleGetAlluser,
    handlegetUserbyId,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser,
} = require("../controllers/user");

// ==============================
// GET All Users & CREATE User
// ==============================
router
    .route("/")
    .get(hanleGetAlluser)
    .post(handleCreateUser);

// ==============================
// GET, UPDATE & DELETE User By ID
// ==============================
router
    .route("/:id")
    .get(handlegetUserbyId)
    .patch(handleUpdateUser)
    .delete(handleDeleteUser);

module.exports = router;