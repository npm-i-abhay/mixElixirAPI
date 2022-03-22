const User  = require ('../model/user')
const jwt = require('jsonwebtoken');
const { query } = require('express');

const signup = (req,res)=>{
    // creating a new user using the user schema/class
    const user = new User()
    user.email = req.body.email
    user.password = req.body.password
    user.username = req.body.username
    user.save((err,done)=>{
        if(err) return res.status(500).send('sign up failed')
        res.status(201).send("Signed up successfully")
    })

}

const login = (req,res)=>{
    // find user using req.body.email
User.findOne({email:req.body.email}, (err,user)=>
    {
        // if the email doesn't match
        if(err || !user ) return res.status(500).send('user not found')
        console.log(req.body)
        
        // jwt function to compare the password being received with the token 
        if(user.comparePassword(req.body.password))
        {   const token = jwt.sign({ 
            id:user._id, 
            email:user.email, 
            username:user.username 
            
        }, process.env.jwtSecret)//using the .env file to not reveal or push this on the repo
            res.status(201).json({token, user})
            // sending back the token and the user after logging in.
        }
        else {
            res.status(500).send('could not login')
        }
    },"-password")
}

module.exports ={signup,login}//export function to routes