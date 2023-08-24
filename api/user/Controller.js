/********************************
* File name: Controller.js      *
* Author: Ammar S.A.A           *
* Output: Controller for users  *
********************************/

const User = require('./Model')
const { connect } = require('mongoose')
require('dotenv').config()
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

///api/users/signin
const Signin = async (req, res) => {
    const { email, password } = req.body;

    // email & password required for signin
    // don't proceed to signin
    if (!email || !password) {
        res.status(400).json({
            message: "Oops! Missing Required Field.",
        });
    }
    // proceed to signin
    else {
        try {
            // Connection to database
            await connect(process.env.MONGO_URI);
            // search email
            const CheckUser = await User.findOne({ email });
            // if email not found, stop
            if (!CheckUser) {
                res.status(404).json({
                    message: "Oops! User Don't Exists.",
                });
            }
            // email found, proceed
            else {
                // decrypt pswd hash and compare from db
                const decryptpassword = await compare(password, CheckUser.password);
                // if email and password matches, proceed for token generation
                // generates token
                if (email === CheckUser.email && decryptpassword) {
                    const UserData = {
                        email: CheckUser.email,
                        _id: CheckUser._id,
                        role: CheckUser.role,
                        profilePic: CheckUser.profilePic,
                        createdAt: CheckUser.creationDate,
                        name: CheckUser.name
                    };

                    const token = sign(UserData, process.env.JWT_SECRET);


                    res.json({
                        message: "Success! Signed In.",
                        token,
                    });
                }
                // email exists but wrong password
                else {
                    res.status(403).json({
                        message: "Oops! Invalid password.",
                    });
                }
            }
        } catch (error) {
            // catches error and broadcasts
            res.json({
                message: error.message,
            });
        }
    }
};

///api/users/signup
const Signup = async (req, res) => {

    const { name, email, password } = req.body
    //name, email & password required for signup
    //don't proceed to signup
    if (!name || !email || !password) {
        res.status(400).json({
            message: "Oops! Missing Required Field."
        })
    }
    //proceed to signup
    else {

        try {
            //Connection to database
            await connect(process.env.MONGO_URI)
            //search email
            const CheckUser = await User.findOne({ email })
            //if email found, stop
            if (CheckUser) {
                res.json({
                    message: "Oops! email Already Exists."
                })
            }
            //proceed for signup
            else {
                //create user with encrypted password
                await User.create({ name, email, password: await hash(password, 12) })
                res.json({
                    message: "Success! New User Added."
                })
            }
        }

        //catches error and broadcasts
        catch (error) {
            res.json({
                message: error.message
            })
        }
    }
}

///api/users/getUsers
const getUsers = async (req, res) => {
    try {
        //Connection to database
        await connect(process.env.MONGO_URI)

        //Find all users (excluding password field)
        const allUsers = await User.find({}, { password: 0 })

        if (allUsers.length === 0) {
            return res.json({
                message: "Oops! No Users."
            })
        }

        res.json({
            message: "Success",
            users: allUsers
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}


///api/users/updateUser
const updateUser = async (req, res) => {

    const { _id, email, name, ProfilePic } = req.body

    const filter = { _id };
    const update = { email, name, ProfilePic };

    try {
        //connection
        //Connection to database
        await connect(process.env.MONGO_URI)
        //find one from _id and updates it
        const updated = await User.findOneAndUpdate(filter, update, {
            new: true
        })

        res.json({
            message: "Woohoo! Updated Successfully.",
            user: updated
        })
    }

    //catches error and broadcasts
    catch (error) {
        res.json({
            message: error.message
        })
    }

}

///api/users/userByID
const userByID = async (req, res) => {

    const { _id } = req.query

    try {
        //connection
        //Connection to database
        await connect(process.env.MONGO_URI)
        //find one from _id and fetch it's details except of password
        const user = await User.findOne({ _id }, { password: 0 })

        if (!user) {
            return res.json({
                message: "Oops! User Not Found."
            });
        }
        res.json({ user })
    }

    //catches error and broadcasts
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

///api/users/deleteUser
const deleteUser = async (req, res) => {

    const { _id } = req.body

    try {
        //connection
        //Connection to database
        await connect(process.env.MONGO_URI)
        //find one from _id and delete it
        await User.deleteOne({ _id })
        //Success Message
        res.json({ message: "Success! User Deleted." })
    }

    //catches error and broadcasts
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

module.exports = { Signin, Signup, deleteUser, updateUser, userByID, getUsers }