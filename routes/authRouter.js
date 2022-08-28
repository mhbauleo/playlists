const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')
const { usersJoiValidator } = require('../middlewares/joiValidator')

router.post('/register', usersJoiValidator, authController.createNewUser)
router.post('/login', usersJoiValidator, authController.login)

module.exports = router