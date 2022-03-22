const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require ('./config')
import axios from 'axios'
import { Mongo_DB_URL } from './config'


app.use(express.json()) 
mongoose.connect(config.Mongo_DB_URL, (err)=>{
    if(err) return console.log(err)
    
    console.log("connected to db successfully")
})

app.listen(3000, ()=> console.log('server running on port 3000'))

async function getData(){
    const res = await axios.get(Mongo_DB_URL);
    console.log(res)
}

getData()
