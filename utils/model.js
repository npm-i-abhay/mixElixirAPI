const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DrinksSchema = new Schema({

        FIELD1: Number,
        dateModified:Date,
        idDrink: Number,
        ingredients:Array,
        strAlcoholic: String,
        strCategory: String,
        strDrink:String,
        strDrinkThumb:String,
        strGlass: String,
        strIBA:String,
        strInstructions: String,
})

const model= mongoose.model("Drink", DrinksSchema)

module.exports = model


