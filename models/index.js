const Category = require('./Category');
const Item = require('./Item');
const User = require('./User');

// each product belongs to a category
Item.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

// categories have many food items
Category.hasMany(Item, {
    foreignKey: 'category_id',
});

// items belong to many users
Item.belongsToMany(User, {
    through: UserItem,
    foreignKey: 'item_id',
});

// users belong to many food items
User.belongsToMany(Item, {
    through: UserItem,
    foreignKey: 'user_id',
});

module.exports = {
    Category,
    Item,
    User,
    UserItem,
};