const Sequelize = require('sequelize');
const database = new Sequelize('yelp', 'aclspy' , '12345678', {
  host: 'yelp.cnfpxlzbltmp.us-east-1.rds.amazonaws.com',
  dialect: 'postgres',
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

database
  .authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL Database.');
  })
  .catch(err => {
    console.error('Unable to connect to PostgresSQL Database.', err);
  });

//This will create your tables for you when PostgreSQL is empty.
// database.sync({force: true})
//   .then(console.log('db created'));

module.exports = database;
