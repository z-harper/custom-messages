const express = require('express');
const messageRoutes = require('./routes/message');

// Create express app
const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Connect to server
app.listen(3000, () => console.log('Listening on port: 3000'));

// Routes
app.use('/message', messageRoutes);

// Redirect to message routes
app.get('/', (req, res) => {
  res.redirect('/message');
})