const Sequelize = require('sequelize');
const database = require('./index.js');

const Business = database.define('business', {
  bus_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNULL: false,
    primaryKey: true
  },
  alias: Sequelize.STRING,
  name: Sequelize.STRING,
  claimed: Sequelize.BOOLEAN,
  rating: Sequelize.REAL,
  review_count: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
  category: Sequelize.STRING,
  street: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
  country: Sequelize.STRING,
  website: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});

module.exports = Business;
