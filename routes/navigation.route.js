const db = require('./../database/db');
const express = require('express');

const navigationRoute = express.Router();

const table = "categories";

/**
 * get all the navigation from categories table
 */
navigationRoute.route('/').get((request, response) => {
    db.collection(table).find({}, {categoryId: 1, categoryTitle: 1}, (error, docs) => {
        if (error) {
            return next(error);
        } else {
            response.json(docs);
        }
    });
});

module.exports = navigationRoute;