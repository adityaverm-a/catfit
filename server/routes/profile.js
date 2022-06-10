const express = require('express')
const { authUser, authVet } = require('../controllers/userController')

const router = express.Router()

router.post('/:id', updateUserProfile)

module.exports = router