/****************************
* File Name: Model.js 		*
* Author: Ammar S.A.A 		*
* Output: Model for product *
****************************/

const { Schema, model } = require('mongoose')

const ProductSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
            unique: true
        },
        Image: {
            type: String,
            required: true
        }
    }
)

const Products = model('product', ProductSchema)
module.exports = Products