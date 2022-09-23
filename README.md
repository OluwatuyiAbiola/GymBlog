
## GYMBLOG

This is a gymblog that shows different gym routines and can receive gym routines and store them in a mongodb database

### Modules

- EJS
- Express
- dotenv
- Express-layouts
- Express-sessions
- Mongodb
- Mongoose
- Connect-flash
- Cookie-parser


#### Structure of Project

- public: stores static files
    -css
    -html
    -js
- server: Stores functionality of the app and database functionalities
    - controllers: main functionality of the app
    - models: structure/schema of our database and database connection
    - routes: our pages route
- views: ejs files 
    - layouts: the main layouts of the ejs 
- app.js: Brain of the app

##### Pages

- Home
- Explore-latest
- Explore-Random
- Search
- Submit
- Routine
- Categories


-To start:
    -npm install
    -install nodemon
    -nodemon app.js