const express = require('express')
const req = require('express/lib/request')
const router  = express.Router()
const Drinks = require('../utils/model')
const authorizeUser = require("../utils/auth/auth")


router.get('/', (req,res)=>{
// get all the drinks
    Drinks.find({},(err,data)=>{
        if(err)return res.send(err)

        // console.log(data)
        res.json(data)
    })

})


module.exports = router
