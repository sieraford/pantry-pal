const { Item } = require('../models');

const itemData = [
  {
    name: 'Milk',
    quantity: 1,
    expiration_date: "02-15-2023",
    category_id: 1,
  },
  {
    name: 'Pasta',
    quantity: 3,
    expiration_date: "12-01-2024",
    category_id: 6,
  },
  {
    name: 'Cake',
    quantity: 1,
    expiration_date: "02-10-2023",
    category_id: 5,
  },
  {
    name: 'Broccoli',
    quantity: 10,
    expiration_date: "02-25-2023",
    category_id: 2,
  },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;