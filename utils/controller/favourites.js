const Favourites = require ('../model/favourites')


const addFavourite = (req,res)=>
{
    var favs = new Favourites()
    favs.drink = req.body.favDrink
    favs.user = req.body.user
    favs.save((err,done)=>{
        if(err) return res.status(500).send('can create any favourites')
        res.status(200).send("added to favourites")
    })
}


module.exports = {addFavourite}