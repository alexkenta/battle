const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(__dirname + '/gitHubBattle/dist/gitHubBattle'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(port, function(){
    console.log("listening on port", port)
})