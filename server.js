const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require ('./config')
const drinksRouter = require ('./Routes/drinks')
const API = require ('./utils/func')
const userRouter = require('./Routes/user')
const favouritesRouter = require('./Routes/favourites')


mongoose.connect(config.Mongo_DB_URL, (err)=>{
    if(err) return console.log(err)
    
    console.log("connected to db successfully")
})

app.use(express.json()) 
app.use(drinksRouter)
app.use(userRouter)
app.use(favouritesRouter)
app.listen(process.env.PORT || 3000, ()=> console.log('server running on port 3000'))


