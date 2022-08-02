//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Fruit = require("./fruit");
const Veggie = require("./veggie");

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Fruit,
    Veggie,
  },
};
