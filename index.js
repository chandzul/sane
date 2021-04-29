// Core
const express = require('express');

const app = express();
const cors = require('cors');

// Configurations
const { config } = require('./config/index');

// Cors
app.use(cors());

// Routes
const testApi = require('./routes/example');

// Endpoints
testApi(app);

// Server
app.listen(config.port, () => {
  console.log(`listen http://localhost:${config.port}`);
});
