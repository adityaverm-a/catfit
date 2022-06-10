const express = require('express')
const { authUser, getUser } = require('../controllers/userController')
const {protect } = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/').post(authUser).get(protect, getUser)

module.exports = router