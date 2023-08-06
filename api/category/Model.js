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

const Category = model('Category', CategorySchema);
module.exports = Category;