const axios = require('axios');

const controller = {
  get: (req, res) => {
    console.log('controller.get was called!');
  },
  post: (req, res) => {
    console.log('controller.post was called!');
  }
}

module.exports = controller;
