const jwt = require('jsonwebtoken')

const generateToken = (user) => {
    const token = jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )

    return token
}


const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}
module.exports = {
    generateToken,
    verifyToken

}