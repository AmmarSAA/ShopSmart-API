/****************************
* File name: Model.js 		*
* Author: Ammar S.A.A 		*
* Output: Model for brand 	*
****************************/

const { Schema, model } = require('mongoose');

const BrandSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    }
},{
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

const Brand = model('Brand', BrandSchema);
module.exports = Brand;
