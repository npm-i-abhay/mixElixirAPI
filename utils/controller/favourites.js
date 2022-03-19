const Favourites = require ('../model/favourites')
const Drinks = require ('../model')

const addFavourite = (req,res)=>
{
    var favs = new Favourites()
    favs.drink = req.body.favDrink
    favs.user = req.body.user
    favs.save((err,done)=>{
        if(err) return res.status(500).send('can not create any favourites')
        res.status(200).send("added to favourites")
    })
}


const getFavs = (req,res)=>
{
    Favourites.find({user:req.user.id})
    // .select("User")
    .populate("drink")
    .exec((err,data)=>{
        if (err) return res.send(err);
    res.json(data);
    })
}

module.exports = {addFavourite, getFavs}