// Core
const express = require('express');

const app = express();
const cors = require('cors');

// Configurations
const { config } = require('./config/index');

// Middlewares
const notFoundHandler = require('./utils/middleware/notFoundHandler');
const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandler');

// Cors
app.use(cors());

// Routes
const testApi = require('./routes/example');

// Endpoints
testApi(app);

// 404
app.use(notFoundHandler);

// Errors
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// Server
app.listen(config.port, () => {
  console.log(`listen http://localhost:${config.port}`);
});
