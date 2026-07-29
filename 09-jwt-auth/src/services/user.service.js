const bcrypt = require('bcryptjs')
const User = require('../models/user')
const { generateToken } = require('../utils/jwt');



const registerUser = async (userData) => {
    const { name, email, password } = userData

    const existingUser = await User.findOne({
        email: email
    })

    if (existingUser) {
        throw new Error("Email already exists")
    }

    const hashedPassword = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT))


    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })


    return {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    }
}

const loginUser = async (userData) => {
    const { email, password } = userData

    const user = await User.findOne({ email: email })
    if (!user) {
        throw new Error("Invalid email or password")
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
        throw new Error("Invalid email or password")
    }

    const token = generateToken(user)
    return {
        token, user
    }
}

module.exports = {
    registerUser,
    loginUser
}