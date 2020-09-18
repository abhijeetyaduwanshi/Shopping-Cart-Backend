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
 * @param  {id} id of the product
 * @param  {category} name of the category
 */
productRoute.route('/:id/:category').get((request, response) => {
    const id = request.params.id;
    const table = request.params.category;

    db.collection(table).findOne({_id: mongojs.ObjectId(id)}, {productTitle: 1, productPrice: 1, productImage: 1}, (error, docs) => {
        if (error) {
            return next(error);
        } else {
            response.json(docs);
        }
    });
});

module.exports = productRoute;
