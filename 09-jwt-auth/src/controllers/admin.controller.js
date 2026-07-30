const adminDashboard = (req, res) => {

    return res.status(200).json(
        {
            success: true,
            message: "welcome to admin dashboard",
            user: req.user
        }
    )
}

module.exports = {
    adminDashboard,

}