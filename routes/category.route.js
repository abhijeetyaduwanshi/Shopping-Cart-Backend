const db = require('./../database/db');
const express = require('express');

const categoryRoute = express.Router();

categoryRoute.route('/').get((request, response) => {
    db.categories.find((error, docs) => {
        if (error) {
            return next(error);
        } else {
            response.json(docs);
        }
    });
});

module.exports = categoryRoute;
