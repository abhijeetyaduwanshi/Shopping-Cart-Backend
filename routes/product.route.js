const db = require('./../database/db');
const express = require('express');
const mongojs = require('mongojs');

const productRoute = express.Router();

/**
 * get the list of all the products in a category
 * 
 * @param  {category} name of the category
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

/**
 * get a product based on its id and category which it belongs to
 * 
 * @param  {category} name of the category
 * @param  {id} id of the product
 */
productRoute.route('/:category/:id').get((request, response) => {
    const table = request.params.category;
    const id = request.params.id;

    db.collection(table).findOne({_id: mongojs.ObjectId(id)}, {}, (error, docs) => {
        if (error) {
            return next(error);
        } else {
            response.json(docs);
        }
    });
});

module.exports = productRoute;
