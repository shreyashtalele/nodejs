const User = require("../models/user");

// ==============================
// GET All Users
// ==============================
async function hanleGetAlluser(req, res) {
    try {
        const allDbUsers = await User.find({});
        return res.status(200).json(allDbUsers);
    } catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
}

// ==============================
// GET User By ID
// ==============================
async function handlegetUserbyId(req, res) {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.json(user);
    } catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
}

// ==============================
// CREATE User
// ==============================
async function handleCreateUser(req, res) {
    try {
        const body = req.body;

        if (
            !body ||
            !body.first_name ||
            !body.last_name ||
            !body.email ||
            !body.gender ||
            !body.jobTittle
        ) {
            return res.status(400).json({
                msg: "All fields are required",
            });
        }

        const result = await User.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTittle: body.jobTittle,
        });

        return res.status(201).json({
            message: "User Created Successfully",
            data: result,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
}

// ==============================
// UPDATE User
// ==============================
async function handleUpdateUser(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.json({
            status: "success",
            data: updatedUser,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
}

// ==============================
// DELETE User
// ==============================
async function handleDeleteUser(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        return res.json({
            status: "success",
            deletedUser,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
        });
    }
}

module.exports = {
    hanleGetAlluser,
    handlegetUserbyId,
    handleCreateUser,
    handleUpdateUser,
    handleDeleteUser,
};