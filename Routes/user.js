const express = require('express')
const router  = express.Router()
const {signup, login} = require ('../utils/controller/user')

router.post('/signup', signup)

router.post('/login', login)



module.exports = router