const User  = require ('../model/user')
const jwt = require('jsonwebtoken');
const signup = (req,res)=>{
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
User.findOne({email:req.body.email}, (err,user)=>
    {
        if(err || !user ) return res.status(500).send('user not found')
        console.log(req.body)
        if(user.comparePassword(req.body.password))
        {   const token = jwt.sign({ 
            id:user._id, 
            email:user.email, 
            username:user.username }, 'mysecret')
            res.status(201).send(token)
        }
        else {
            res.status(500).send('could not login')
        }
    })
}

module.exports ={signup,login}