// const axios = require('axios');
// const db = require('../database/mongoDB');
const Business = require('../database/postgreSQL/models');

// const controller = {
//   getBusinessData: (req, res) => {
//     console.log('controller.get was called!');
//
//     let Businesses = db.get('businesses');
//     let parameters = {}
//
//     if (req.query.name) {
//       parameters['name'] = req.query.name;
//     }
//
//     if (req.query.location) {
//       parameters['address.zip'] = req.query.location;
//     }
//
//     Businesses.find(parameters).toArray((error, data) => {
//       if (error) {
//         console.log(error);
//       }
//       else {
//         res.send(data);
//       }
//     });
//   }
// }

const controller = {
  getBusinessData: (req, res) => {
    console.log('controller.get was called!');

    let parameters = {};

    if (req.query.name) {
      parameters['name'] = req.query.name;
    }

    if (req.query.location) {
      parameters['city'] = req.query.location;
    }

    Business.findOne({
      where: parameters
    }).then(business => {
      if (business['dataValues']) {
        res.send(business['dataValues']);
      }
    }).catch(err => {
      console.log('restaurant does not exist in database');
    })
  },
  postBusinessData: (req, res) => {
    console.log('controller.post was called!');

    let parameters = req.body;

    Business.create(parameters)
      .then(business => {
        console.log(business);
      });
  }
}

module.exports = controller;
