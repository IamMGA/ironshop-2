const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const expressLayout = require('express-ejs-layouts');
const productsRoute = require('./routes/products.route');

// Import DB config
require('./config/db.config');

const app = express();

// view engine setup
app.use(expressLayout);
app.set('layout', 'layout');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/products', productsRoute);

app.use('/', (_, res) => res.redirect('/products'));

module.exports = app;
