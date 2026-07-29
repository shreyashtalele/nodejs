const { registerUser,
    loginUser } = require('../services/user.service')
const registerUserController = async (req, res, next) => {
    const userData = req.body

    try {

        const data = await registerUser(userData)
        return res.status(201).json(
            {
                success: true,
                message: 'User created Successfully',
                data: data
            }
        )
    } catch (error) {
        next(error)
    }

}


const loginUserController = async (req, res, next) => {
    const userData = req.body

    try {
        const data = await loginUser(userData)
        return res.status(200).json(
            {
                success: true,
                message: 'User logged in successfully',
                data: data
            }
        )
    } catch (error) {
        next(error)
    }
}



module.exports = {
    registerUserController,
    loginUserController,
}