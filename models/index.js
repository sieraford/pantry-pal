const Category = require('./Category');
const Item = require('./Item');
const User = require('./User');

User.hasMany(Item, {
    foreignKey: 'user_id',
});

Item.hasMany(User, {
    foreignKey: 'user_id'
})