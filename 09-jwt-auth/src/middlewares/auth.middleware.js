const { verifyToken } = require('../utils/jwt')

const authenticate = (req, res, next) => {
    console.log("AUTH MIDDLEWARE CALLED")
    try {
        const authorization = req.headers.authorization
        if (!authorization) {
            throw new Error("Authentication required")
        }
        console.log("HEADER:", authorization)
        const token = authorization.split(' ')[1]

        const decoded = verifyToken(token)
        console.log("DECODED:", decoded)
        req.user = decoded
        next()
    } catch (error) {
        console.log("BEFORE NEXT")
        next(error)
    }

}

module.exports = authenticate