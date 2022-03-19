const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavouriteScehma = new Schema({
        drinks : [],
})

const Favourites = mongoose.model("Favs", FavouriteScehma)

module.exports = Favourites