const all_drinks = require('../all_drinks')
const Drinks = require('./model')


const handleApi= ()=>
{
  try{
    all_drinks.map(obj =>
    {
            
            let storedIngredients =[]// array to extract and store all the ingredients from the data in an array format
            let ingredients = [] // array to store all extracted ingredients by after filtering out the empty values
            let formatedDrinks =[] // array to store the data in a formated manner i.e consolidating seperate ingredient key value pairs into one singular array of key : [array of ingredients for each drink in the data]
            

            // reformating data into the aforementioned format
            for (var i=1; i<16;i++)
            {
                storedIngredients.push(obj["strIngredient"+i])
            }

            storedIngredients.map((o,i)=>
            {
                if(o != '')
                {ingredients.push(o)}
            })

            // constructing a new object with the everything but the ingredients 
            formatedDrinks.push(Object.fromEntries(Object.entries(obj).filter(([key]) => !key.includes('strIngredient'))));
            // pushing the formatted ingredients into the newly constructed object
            formatedDrinks.map((o,i)=> Object.assign(o,{ingredients:ingredients}))
            
            formatedDrinks.forEach((drink)=>
            {

            const newDrink = new Drinks()
            Object.assign(newDrink,drink)
            
            newDrink.save()

            })
            
    })
}
catch(err){ console.log(err), 'not workingg'}
}

module.exports = handleApi