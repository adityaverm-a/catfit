const asyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken')
const User = require("../models/User")

const protect = asyncHandler(async (req, res, next) => {
  
    const token = req.header('x-auth-token')

    //Check if not token
    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
  
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()
    } catch (err) {
        console.error(err)
        res.status(401)
        throw new Error('Not authorized, token failed')
    }
  })

  module.exports = { protect }