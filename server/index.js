require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller.js');
const connectionString = process.env.CONNECTION_STRING;

const app = express();

app.use (bodyParser.json ());

const PORT = 4000;

massive(connectionString).then(connection => {
    app.set('db', connection)
    app.listen( PORT, () => {
        console.log('The magic is happening on port', PORT);
    })
})