const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Image = require('./api/models/image')

mongoose.connect('mongodb://localhost:27017/images', { useNewUrlParser: true })
const db = mongoose.connection

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Load routes
const routes = require('./api/routes');

// Register routes
app.use('/api', routes) 


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

   // Handle React routing, return all requests to React app
   app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));