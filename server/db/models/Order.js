const Sequelize = require('sequelize');
const db = require('../db');
const Order = db.define('order', {
  name: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER
  },
price: {
    type: Sequelize.FLOAT,
},imageUrl: {
    type: Sequelize.TEXT,
}
//   status: {
//     type: Sequelize.ENUM('open', 'closed'),
//     allowNull: false,
//   },
});
module.exports = Order;