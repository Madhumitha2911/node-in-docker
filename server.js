
'use strict'

const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req,res) => {
    res.send('This is a node project running in docker </br>');
});

app.listen(PORT,HOST);