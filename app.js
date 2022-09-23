const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const fileUpload = require('express-fileupload');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(expressLayouts);

app.use(cookieParser("GymBlogSecure"));
app.use(session({
    secret: "GymBlogSecure",
    saveUninitialized: true,
    resave: true
}));
app.use(flash());
app.use(fileUpload());

//where we want to store layouts 
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

//routes
const route = require("./server/routes/gymRoutes.js");

app.use("/", route);

//string literal is a backtick not quotes
app.listen(port, ()=>{ console.log(`Listening on port ${port}`);});

