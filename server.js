'use strict';

// Load Environment Variables from the .env file
require('dotenv').config()

// Application Dependencies
const express = require('express');

// Appication Setup
const PORT = process.env.PORT
const app = express();
app.use( express.static('./app') );

app.listen(PORT, () => {
 console.log(`App listening on port ${PORT}!`)
});