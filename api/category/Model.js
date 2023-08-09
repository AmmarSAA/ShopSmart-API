/********************************
* File name: Model.js 			*
* Author: Ammar S.A.A 			*
* Output: Model for categories 	*
********************************/

const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
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
}
);

const Category = model('Category', CategorySchema);
module.exports = Category;