const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const UserSchema = new Schema({
    username:String,
    email:String,
    password: String,
    // defining the user Schema
})

UserSchema.pre('save',function(next)//before saving data, get the password and hash it and replace the plain password with hash
    {
        const user = this //initiating this function to include the current user depending on who's trying to use this schema 

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                // Store hash in your password DB.
                user.password = hash
                next()//move on to save the user
            });
        });
    })



// creating a mongo method
// custom function to save for our individual document User

//this becomes a part of the user. internal function that is reliant on the current schema
UserSchema.methods.comparePassword = function(password)
{
    // Load hash from our password collection.
    return bcrypt.compareSync(password, this.password);
}

// schema being built
const User= mongoose.model("User",UserSchema)

module.exports = User


