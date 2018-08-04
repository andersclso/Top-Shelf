const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelpBiz');

const db = mongoose.connection;
db.on('error', error => console.log(('Cannot connect to database')));
db.once('open', () => console.log('Connected to database!'));
