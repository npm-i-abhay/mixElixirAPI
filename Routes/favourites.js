const express = require('express')
const router  = express.Router()
const { addFavourite } = require('../utils/controller/favourites')


router.post('/fav', addFavourite)

module .exports = router