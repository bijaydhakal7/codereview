const express = require('express');
const app = express();




app.get('/', (req, res) => {
  res.send('Hello bijay!');
} );



module.exports = app;