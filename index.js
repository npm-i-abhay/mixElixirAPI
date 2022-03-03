const express = require('express')
const app = express()
const mongoose = require('mongoose')
import axios from 'axios'


app.use(express.json()) 
mongoose.connect(config.Mongo_DB_URL, (err)=>{
    if(err) return console.log(err)
    
    console.log("connected to db successfully")
})

app.listen(3000, ()=> console.log('server running on port 3000'))

const res = await axios.get('');
console.log(res)
const config = require ('./config')
