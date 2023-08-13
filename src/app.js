const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const errorHandler = require('./middleware/errorHandler');
const { loggerOptions, corsOptions, apiPath } = require('./config/app.config');
const routes = require('./routes');

const app = express();

// app.use(express.static(path.join(__dirname, '../public')));
// app.use(cookieParser();
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(loggerOptions));

app.use(apiPath, routes);

app.use(errorHandler(loggerOptions));

module.exports = app;
