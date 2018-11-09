const fs = require('fs');
const faker = require('faker');
const Generate = require('./randomNumberGenerators');
// const Biz = require('./database/mongoDB/models');
// const mongoose = require('mongoose');

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTF(number) {
  return number ? true : false;
}

//Creates MongoDB Seed Data file

// function createSeedJSONdata(writer, data, encoding, callback) {
//   writer = fs.createWriteStream('seedData.json');
//   let i = 10000000;
//   write();
//
//   function write() {
//     let ok = true;
//     do {
//       i--;
//       console.log(i);
//
//       let business = {
//         alias: faker.company.companyName(),
//         name: faker.company.companyName(),
//         claimed: generateTF(generateRandomNumber(0,1)),
//         rating: Generate.rating(),
//         review_count: Generate.reviews(),
//         price: Generate.price(),
//         category: faker.commerce.department(),
//         address: {
//           street: faker.address.streetName(),
//           city: faker.address.city(),
//           state: faker.address.state(),
//           zip: faker.address.zipCode(),
//           country: faker.address.countryCode()
//         },
//         website: faker.internet.url(),
//         email: faker.internet.email(),
//         phone: faker.phone.phoneNumber()
//       }
//
//       let data = JSON.stringify(business) + '\n';
//
//       if (i === 0) {
//         // last time!
//         writer.write(data, encoding, callback);
//         console.log('finished writing data!');
//
//       } else {
//         // see if we should continue, or wait
//         // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // had to stop early!
//       // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
// }

// createSeedJSONdata();

// function generateBusiness() {
//   let business = new Biz({
//     alias: "Intelligentsia Coffee",
//     name: "Intelligentsia Coffee",
//     claimed: true,
//     rating: 4,
//     review_count: 1614,
//     price: 2,
//     category: "Coffee & Tea",
//     address: {
//       street: "3922 W Sunset Blvd",
//       city: "Los Angeles",
//       state: "CA",
//       zip: "90029",
//       country: "US"
//     },
//     website: "intelligentsiacoffee.com",
//     email: undefined,
//     phone: "(323) 663-6173"
//   })
//
//   business.save(error => console.log(error));
// }
//
// generateBusiness();

function createSeedCSVdata(writer, data, encoding, callback) {
  writer = fs.createWriteStream('restaurants.csv');
  let i = 10000000;
  write();

  function write() {
    let ok = true;
    do {

      let business = {
        alias: faker.company.companyName(),
        name: faker.company.companyName(),
        claimed: generateTF(generateRandomNumber(0,1)),
        rating: Generate.rating(),
        review_count: Generate.reviews(),
        price: Generate.price(),
        category: faker.commerce.department(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        country: faker.address.countryCode(),
        website: faker.internet.url(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber()
      }

      if (i === 10000000) {
        writer.write(Object.keys(business).join('|') + '\n');
      }

      i -= 1;

      data = Object.values(business).join('|') + '\n';

      if (i === 0) {
        // last time!
        writer.write(data, encoding, callback);
        console.log('finished generating data!');

      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}

// createSeedCSVdata();

function seedData(tablename, file) {
  let pool = new Pool({
    user: 'andersso',
    database: 'yelp',
    password: 'apple630',
    port: 4000
  });

  pool.connect(function(err, client, done) {
    const stream = client.query(copyFrom(`COPY ${tablename} FROM STDIN`));
    const fileStream = fs.createReadStream(file);
    fileStream.on('error', done);
    stream.on('error', done);
    stream.on('end', done);
    fileStream.pipe(stream);
  });

  // pool.connect().then(client=>{
  //   let done = () => {
  //     client.release();
  //   }
  //   var stream = client.query(copyFrom('COPY employee (name,age,salary) FROM STDIN'));
  //   const fileStream = fs.createReadStream(file);
  //   fileStream.on('error', done);
  //   stream.on('error', onError);
  //   stream.on('end',done);
  //   fileStream.pipe(stream);
  // });
}

seedData('businesses', 'restaurants.csv');
