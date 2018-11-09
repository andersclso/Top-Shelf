require('dotenv').config();
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
const router = require('./router.js');
// const db = require('../database/mongoDB');

const server = express();
const port = 3006;

server.use(cors());
server.use(express.static(path.join(__dirname, '../client/dist')));
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));
server.use('/main', router);
server.listen(port, () => console.log('Listening on port', port));

// db.connect('mongodb+srv://aclspy:' + encodeURIComponent(process.env.MONGO_ATLAS_PW) + '@cluster0-ltgke.mongodb.net/test?retryWrites=true', (error) => {
//   if (error) {
//     console.log('Unable to connect to MongoDB');
//   } else {
//     console.log('Connected to MongoDB');
//   }
// });
