const db = require('./../database/db');
const express = require('express');

const productRoute = express.Router();

/**
 * get the list of all the products in a category
 */
productRoute.route('/:category').get((request, response) => {
    const table = request.params.category;

    db.collection(table).find((error, docs) => {
        if(error) {
            return next(error);
        } else {
            response.json(docs);
        }
    });
});

module.exports = productRoute;
