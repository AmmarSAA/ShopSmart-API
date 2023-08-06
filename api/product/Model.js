/****************************
* File name: Model.js 		*
* Author: Ammar S.A.A 		*
* Output: Model for product *
****************************/

const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    stock: {
        type: String,
        required: true,
    },
    retailPrice: {
        type: Number,
        required: true,
    },
    purchasePrice: {
        type: Number,
        required: true,
    },
    discountPercentage: {
        type: Number,
        required: true,
        default: 5,
    },
    brandID: {
        type: Number,
        required: true,
    },
    catID: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    images: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now,
    },
    updationDate: {
        type: Date,
        default: null,
    },
});

const Products = model('Product', ProductSchema);
module.exports = Products;
