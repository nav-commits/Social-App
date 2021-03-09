const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const Port = 5000;
const social = require("./Routes/Social.js");
require('dotenv').config();
const cors = require('cors')


// MIDDLEWARE FOR PARSING
app.use(bodyParser.json());
app.use('/Social',social)

app.use(cors())

// Database connection
mongoose.connect(`${process.env.DBCONNECTION}`,
{useNewUrlParser: true}, () =>{
    console.log('we are connected')
})
mongoose.set('useCreateIndex',true);


app.listen(Port);