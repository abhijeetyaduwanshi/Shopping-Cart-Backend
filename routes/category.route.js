const db = require('./../database/db');
const express = require('express');

const categoryRoute = express.Router();

const table = "categories";

/**
 * get all the categories from categories table
 * 
 * @param  {/} base
 */
categoryRoute.route('/').get((request, response) => {
    db.collection(table).find((error, docs) => {
        if (error) {
            return next(error);
        } else {
            response.json(docs);
        }
    });
});

module.exports = categoryRoute;
