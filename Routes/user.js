const express = require('express')
const router  = express.Router()
const {signup, login} = require ('../utils/controller/user')

// signing up users
router.post('/signup', signup)

// Log users in 
router.post('/login', login)



module.exports = router