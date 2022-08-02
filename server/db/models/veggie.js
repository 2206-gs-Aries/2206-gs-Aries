const Sequelize = require("sequelize");
const db = require("../db");

const Veggie = db.define("veggie", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue:
      "https://i.pinimg.com/736x/9f/03/12/9f0312e04e5cb062a19d0adfda5b683f.jpg",
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isDecimal: true,
      min: 0.0,
      max: 1000,
    },
  },
  inSeason: {
    type: Sequelize.ENUM("TRUE", "FALSE"),
    defaultValue: "TRUE",
    allowNull: false,
  },
});

module.exports = Veggie;
