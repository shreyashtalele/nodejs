const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const User = require('../models/user')


const registerUser = async (userData) => {
    const { name, email, password } = userData

    const existingUser = await User.findOne({
        email: email
    })

    if (existingUser) {
        throw new Error("Email already exists")
    }

    const hashedPassword = await bcrypt.hash(password, process.env.BCRYPT_SALT)


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

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN,
        }
    );
}