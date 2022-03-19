const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavouriteScehma = new Schema({
        // drinks : [],
        user : { type:mongoose.Types.ObjectId, ref:"User" },
        drink:{ type:mongoose.Types.ObjectId, ref:"Drink" },

})

const Favourites = mongoose.model("Favs", FavouriteScehma)

module.exports = Favourites