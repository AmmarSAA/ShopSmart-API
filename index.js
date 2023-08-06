const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); // Load the environment variables from .env

const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Define routes using the appropriate route handlers
app.use('/api/users', require('./api/user/Routes'));
app.use('/api/category', require('./api/category/Routes'));
app.use('/api/brand', require('./api/brand/Routes'));
app.use('/api/product', require('./api/product/Routes'));

app.listen(port, () => {
  console.log(`ShopSmart Server launched on port ${port}`);
});
