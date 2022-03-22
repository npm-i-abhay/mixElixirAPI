const Favourites = require ('../model/favourites')
const Drinks = require ('../model')

const addFavourite = (req,res)=>
{
    // reading the variables being received from the post request and adding new favourites 
    var favs = new Favourites()
    favs.drink = req.body.favDrink
    favs.user = req.body.user
    //saving the favourites to the collection
    favs.save((err,done)=>{
        if(err) return res.status(500).send('can not create any favourites')
        res.status(200).send("added to favourites")
    })
}


const getFavs = (req,res)=>
{
    // looking at the req.user.id to authenticate if the user is logged in 
    Favourites.find({user:req.user.id})
    // using the populate method to populate any and all drinks that are in the favourites collection with the same user _id
    .populate("drink")
    .exec((err,data)=>{
        if (err) return res.send(err);
    res.json(data);//sending back the favourites 
    })
}

module.exports = {addFavourite, getFavs}//exporting the functions to router