const express = require('express')
const router  = express.Router()
const { addFavourite, getFavs } = require('../utils/controller/favourites')
const authUser = require ('../utils/auth/auth')

// add favourites 
router.post('/fav', addFavourite)

// go to route 
// making sure the user is legit
// return favourites
router.get('/myFavs', authUser, getFavs)

module .exports = router