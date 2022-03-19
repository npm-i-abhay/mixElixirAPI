const express = require('express')
const router  = express.Router()
const { addFavourite, getFavs } = require('../utils/controller/favourites')
const authUser = require ('../utils/auth/auth')

router.post('/fav', addFavourite)

// making sure the user is legit
router.get('/myFavs', authUser, getFavs)

module .exports = router