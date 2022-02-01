const express = require('express');

const app = express();

app.use(require('./adn-route'));

module.exports = app;