const mongojs = require('mongojs');
const db = mongojs("mongodb+srv://admin:admin@shoppingcart-xqhw1.mongodb.net/test?retryWrites=true&w=majority");

module.exports = db;
