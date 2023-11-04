// Create web server for comments

// Load modules
const express = require('express');
const app = express();

// Load data
const comments = require('./data/comments');
const contacts = require('./data/contacts');
const products = require('./data/products');

// Define port
const port = process.env.PORT || 4001;

// Serve static files
app.use(express.static('public'));

// Get comments
app.get('/comments', (req, res, next) => {
  res.send(comments);
});

// Get contacts
app.get('/contacts', (req, res, next) => {
  res.send(contacts);
});

// Get products
app.get('/products', (req, res, next) => {
  res.send(products);
});

// Listen to port
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});