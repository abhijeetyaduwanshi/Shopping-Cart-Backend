const db = require('./../database/db');
const express = require('express');

const navigationRoute = express.Router();

const table = "categories";

/**
 * get all the navigation from categories table
 * 
 * @param  {/} base
 */
navigationRoute.route('/').get((request, response) => {
    db.collection(table).find({}, {categoryTitle: 1}, (error, docs) => {
        if (error) {
            return next(error);
        } else {
            response.json(docs);
        }
    });
});

module.exports = navigationRoute;
