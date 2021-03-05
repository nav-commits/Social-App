const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const Port = 3000;
const social = require("./Routes/Social.js");
require('dotenv').config();
// MIDDLEWARE FOR PARSING
app.use(bodyParser.json());
app.use('/Social',social)

// Database connection
mongoose.connect(`${process.env.DBCONNECTION}`,
{useNewUrlParser: true}, () =>{
    console.log('we are connected')
})
mongoose.set('useCreateIndex',true);


app.listen(Port);