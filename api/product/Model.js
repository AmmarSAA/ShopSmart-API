/****************************
* File name: Model.js       *
* Author: Ammar S.A.A       *
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
    Rating: {
        type: Number,
        default: null,
    },
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

const Products = model('Product', ProductSchema);
module.exports = Products;
