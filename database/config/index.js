const mongoose = require('mongoose');
const URI = 'mongodb://nick:a12345@ds215380.mlab.com:15380/airbnb';
const connection = mongoose.connect(URI, {}).then(() => {console.log("successfully connected to DB")});
module.exports = { connection };