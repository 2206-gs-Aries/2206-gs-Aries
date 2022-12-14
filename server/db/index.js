//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')
const Cart = require('./models/Cart')
const Order = require('./models/Order')


//associations could go here!


Cart.belongsTo(User)
User.hasOne(Cart)
User.hasMany(Order)

Cart.hasOne(Order)
Order.belongsTo(User)

Order.hasMany(Product)




module.exports = {
  db,
  models: {
    User,
    Product,
    Cart,
    Order
  },
}
