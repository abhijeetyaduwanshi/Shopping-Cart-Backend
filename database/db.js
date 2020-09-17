const mongojs = require('mongojs');
const db = mongojs('shoppingCart');

module.exports = db;
