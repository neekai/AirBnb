const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('../database/config');
const { router } = require('./router');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
app.use(express.static(path.join(__dirname, '../static')));


app.listen(PORT, err => {
    if(err) {throw err; console.log("There was an err starting up the server..", err)}
      else {
          console.log("Successfully connected to PORT: ", PORT);
      }
});

