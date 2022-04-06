# MixElixirAPI
# Front-end https://github.com/nickbarr3160/mixElixir

repository for backend REST API for mixElixir Application
* This API is primarily built using Node.Js, Express, & Mongoose.

* Other libraries such as jwt, bcrypt.js have been used for authentication and hashing purposes.

* 2 files on root under the utils directory
    * model.js is defining the drinks schema
    * func.js is a data restructuring function that only runs once for reformatting the data.

* Model is where all the collections/scehma are defined 

* Controller containes all the functions being used in routes(for favourites and user)

* Routes contain the imported functions from controllers and routes where the functions will be called

* server.js is the root file (index.js) where all the routes are called and used. The file is called server.js to support the server configurations where the API is hosted(Heroku in this case). 





