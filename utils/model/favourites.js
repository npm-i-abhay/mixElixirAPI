const mongoose = require('mongoose')
const Schema = mongoose.Schema

// defining the favourites schema 
const FavouriteScehma = new Schema({

user : { type:mongoose.Types.ObjectId, ref:"User" },//referring to the user schema based on id
drink:{ type:mongoose.Types.ObjectId, ref:"Drink" },//referring to the drink schema based on id
// similar concept as attaching foreign ids
})

const Favourites = mongoose.model("Favs", FavouriteScehma)

module.exports = Favourites