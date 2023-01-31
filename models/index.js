const Category = require('./Category');
const Item = require('./Item');
const User = require('./User');
const UserItem = require('./UserItem');

// each product belongs to a category
Item.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

// categories have many food items
Category.hasMany(Item, {
    foreignKey: 'category_id',
});

module.exports = {
    Category,
    Item,
    User
};