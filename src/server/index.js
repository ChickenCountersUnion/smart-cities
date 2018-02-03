require('dotenv').config();

const express = require('express'); 

const server = require('./server');

const app = express(); 

const port = process.env.PORT || 3000; 

server(app);

app.listen(port, () => {
  console.log(`Listening on ${port}`); 
})
