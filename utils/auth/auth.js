const jwt = require("jsonwebtoken")

// using jwt library to hash user information 
const authorizeUser=(req,res,next)=>
{
    jwt.verify(req.query.token,"mysecret",(err,data)=>{
        if(err) return res.send("not authorized")//send back error 

        req.user=data //else user is hashed 
        next()
    })
}

module.exports = authorizeUser