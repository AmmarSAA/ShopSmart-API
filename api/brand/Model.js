/****************************
* File Name: Model.js 		*
* Author: Ammar S.A.A 		*
* Output: Model for brand 	*
****************************/

const { Schema, model } = require('mongoose')

const BrandSchema = new Schema(
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

const Brands = model('brand', BrandSchema)
module.exports = Brands