const axios = require('axios');
const faker = require('faker');
const Biz = require('../database/models.js');
const Generate = require('./randomNumberGenerators.js');

const controller = {
  get: (req, res) => {
    console.log('controller.get was called!');

    let business_name = req.query.name;

    Biz.find({ name: business_name }, (error, business) => {
      if (error) {
        console.log(error);
      }
      else {
        res.send(business);
      }
    });
  },
  post: (req, res) => {
    console.log('controller.post was called!');
  },
  postFakerData: (req ,res) => {
    console.log('controller.postFakerData was called!');

    for (let i = 0; i < 100; i++) {
      let business = new Biz({
        id: faker.random.uuid(),
        alias: faker.company.companyName(),
        name: faker.company.companyName(),
        claimed: true,
        rating: Generate.rating(),
        review_count: Generate.reviews(),
        price: Generate.price(),
        category: faker.commerce.department(),
        address: {
          street: faker.address.streetName(),
          city: faker.address.city(),
          state: faker.address.state(),
          zip: faker.address.zipCode(),
          country: faker.address.countryCode()
        },
        website: faker.internet.url(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber()
      });

      business.save((error) => {
        if (error) {
          console.log(error);
        }
      });
    }
  }
}

module.exports = controller;
