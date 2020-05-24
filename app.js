const express = require('express');
const routes = require('./routes');
const Middleware = require('./middlewares');
const ErrorHandlingMiddleware = require('./middlewares/error');

// Express instance
const app = express();

// Mount middlewares
Middleware(app);

// Mount api routes
app.use('/', routes);

// Mount error handling middlewares
ErrorHandlingMiddleware(app);

module.exports = app;
