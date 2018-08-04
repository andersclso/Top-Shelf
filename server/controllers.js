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

    new Biz({
      id: "1d711308-4f4a-45eb-81a5-a02bcbf7b585",
      alias: "Heaney, Armstronga and Schumm",
      name: "Jacobson, Jaskolski and Kreiger",
      claimed: true,
      rating: 1.5,
      review_count: 2047,
      price: "1",
      category: "Beauty",
      address: {
        street: "Pagac Path",
        city: "Alenatown",
        state: "Tennassee",
        zip: "31829-0299",
        country: "PS"
      },
      website: "https://gabe.info",
      email: "Kathlyn80@gmail.com",
      phone: "551.873.1003 x115"
    }).save((error) => {
      if (error) {
        console.log(error);
      }
    });

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
