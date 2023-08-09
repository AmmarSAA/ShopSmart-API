/***************************
* File name: Model.js      *
* Author: Ammar S.A.A      *
* Output: Model for users  *
***************************/

const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
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
            enum: ["user", "admin"],
        }
    },
    {
        timestamps: true, // Automatically manage createdAt and updatedAt fields
    }
);

const User = model('User', userSchema);
module.exports = User;
