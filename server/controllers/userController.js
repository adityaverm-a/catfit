const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const User = require('../models/User')
const Vet = require('../models/VetProfile')

const generateToken = (id) => {
     return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 3600 })
}


const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, isVetAuth } = req.body

    const UserExists = await User.findOne({ email })

    if(UserExists) {
        res.status(401)
        throw new Error('User already exists!')
    }

    var user

    if(isVetAuth) {
        user = await User.create({
            firstName, 
            lastName,
            email,
            password,
            isVet: true
        })
    } else {
        user = await User.create({
            firstName, 
            lastName,
            email,
            password,
        })
    }
    

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    if(user) {
        res.status(201).json({
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(!user){
        res.status(400)
        throw new Error('Invalid Email!')
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        res.status(400)
        throw new Error('Invalid Password!')
    }

    if(user && isMatch) {
        res.status(201).json({
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)

    const { email, firstName, lastName, isVet } = user

    if(user) {
        res.status(201).json({
            email,
            isVet,
            firstName,
            lastName
        })
    } else {
        res.status(400)
        throw new Error('Cannot get the user, re-login!')
    }
})


module.exports = { registerUser, authUser, getUser }