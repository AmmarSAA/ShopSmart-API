/***************************
* File name: Model.js      *
* Author: Ammar S.A.A      *
* Output: Model for users  *
***************************/

const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePic: {
			type: String,
			default: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
		},
		role: {
			type: String,
			default: "user",
		},
		creationDate: {
			type: Date,
			default: Date.now,
		},
		updationDate: {
			type: Date,
			default: null,
		},
	}
);

const User = model('User', UserSchema);
module.exports = User;
