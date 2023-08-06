/***************************
* File Name: Model.js      *
* Author: Ammar S.A.A      *
* Output: Model for users  *
***************************/

const { Schema, model } = require('mongoose')

const UserSchema = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true,
            unique: true
        },
        Password: {
            type: String,
            required: true
        },
        ProfilePic: {
            type: String,
            default: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        },
        Role: {
            type: String,
            default: "user"
        },
        Joining: {
            type: Date,
            default: Date.now
        }

    }
)

const User = model('user', UserSchema)
module.exports = User