/********************************
* File Name: Model.js 			*
* Author: Ammar S.A.A 			*
* Output: Model for categories 	*
********************************/

const { Schema, model } = require('mongoose')

const CategorySchema = new Schema(
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

const Categories = model('category', CategorySchema)
module.exports = Categories