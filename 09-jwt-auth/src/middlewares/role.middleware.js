const authorizeRole = (role) => {

    return (req, res, next) => {
        if (!req.user) {
            throw new Error("Authentication required")
        }
        if (role !== req.user.role) {
            throw new Error('Access Denied')
        }
        next()
    }
}

module.exports = {
    authorizeRole,
}