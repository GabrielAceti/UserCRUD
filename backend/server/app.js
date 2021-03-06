const express = require('express');
const app = express();
const routes = require('./Routes')
const cors = require('cors')

app.use(express.json());
app.use(cors());
app.use('/', routes);

module.exports = app;