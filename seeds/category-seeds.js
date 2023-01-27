const { Category } = require('../models');

const categoryData = [
  {
    name: 'Dairy',
  },
  {
    name: 'Vegetables',
  },
  {
    name: 'Meat',
  },
  {
    name: 'Fruits',
  },
  {
    name: 'Sweets',
  },
  {
    name: 'Starches',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
