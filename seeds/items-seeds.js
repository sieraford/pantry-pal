const { Item } = require('../models');

const itemData = [
  {
    name: 'Milk',
    quantity: 1,
    expiration_date: 2023-01-30,
    category_id: 1,
  },
  {
    name: 'Pasta',
    quantity: 3,
    expiration_date: 2024-12-01,
    category_id: 6,
  },
  {
    name: 'Cake',
    quantity: 1,
    expiration_date: 2023-02-10,
    category_id: 5,
  },
  {
    name: 'Broccoli',
    quantity: 10,
    expiration_date: 2023-02-15,
    category_id: 2,
  },
];

const seedProducts = () => Item.bulkCreate(itemData);

module.exports = seedProducts;