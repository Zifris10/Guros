const express = require('express');

const app = express();

const controller = require('../controller/indexController');
 
app.get('/', controller.renderBienvenida);

module.exports = app;