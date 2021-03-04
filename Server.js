const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const port = 3000;
const app = express();

// MIDDLEWARE FOR PARSING
app.use(bodyParser.json());


// Database connection







app.listen(port);