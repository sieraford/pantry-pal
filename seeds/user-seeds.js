const { User } = require('../models');

const userData = [
  {
    name: 'Siera',
    email: 'siera@gmail.com',
    password: 'password12345',
  },
  {
    name: 'Carli',
    email: 'carli@gmail.com',
    password: 'password12345',
  },
  {
    name: 'Ken',
    email: 'ken@gmail.com',
    password: 'password12345',
  },
  {
    name: 'Matt',
    email: 'matt@gmail.com',
    password: 'password12345',
  },
];

const seedProducts = () => User.bulkCreate(userData);

module.exports = seedProducts;