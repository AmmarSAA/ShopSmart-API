/********************************
* File Name: Controller.js 		*
* Author: Ameen Hamza 			*
* Output: Controller for orders 	*
********************************/

// const Orders = require('./Model');
const { connect } = require('mongoose');
require('dotenv').config();
const User = require('../user/Model');
const Order = require('./Model');

///api/brand/getBrand
const createOrder = async (req, res) => {

    const { items, totalBill, customerAddress, customerContact, customerName, customerEmail, status } = req.body



    if (!items || !totalBill || !customerAddress || !customerContact || !customerName || !customerEmail || !status) {
        res.status(400).json({
            message: "Oops! Missing Required Field."
        })
    }

    try {

        await connect(process.env.MONGO_URI)

        const CheckUser = await User.findOne({ email: customerEmail })
        //if email found, stop
        if (!CheckUser) {
            res.json({
                message: "Oops! User not found."
            })
        }
        //proceed for signup
        else {
            //create user with encrypted password
            await Order.create({ items, totalBill, customerAddress, customerContact, customerName, customerEmail, status })
            res.json({
                message: "Success! Order create Successfully!."
            })
        }

    } catch (error) {
        res.json({
            message: error.message
        })
    }

}

const getOrders = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)

        const allOrders = await Order.find()

        if (allOrders.length === 0) {
            return res.json({
                message: "Oops! No Oders."
            })
        }
        res.json({
            message: "Success",
            orders: allOrders
        })


    } catch (error) {
        res.json({
            message: error.message
        })
    }

}

const getOrderByName = async (req, res) => {
    const { customerName } = req.query

    try {
        //connection
        //Connection to database
        await connect(process.env.MONGO_URI)
        //find one from name and fetch it's details
        const customer = await Order.findOne({ customerName })

        if (!customer) {
            return res.json({
                message: "Oops! Customer Not Found."
            });
        }
        res.json({ customer })
    }

    //catches error and broadcasts
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

const updateOrder = async (req, res) => {
    const { _id, items, totalBill, customerAddress, customerContact, customerName, customerEmail, status } = req.body

    const filter = { _id }
    const update = { items, totalBill, customerAddress, customerContact, customerName, customerEmail, status }

    try {
        //connection
        //Connection to database
        await connect(process.env.MONGO_URI)
        //find one from _id and updates it
        const updated = await Order.findOneAndUpdate(filter, update, {
            new: true
        })

        res.json({
            message: "Woohoo! Updated Successfully.",
            order: updated
        })
    }

    //catches error and broadcasts
    catch (error) {
        res.json({
            message: error.message
        })
    }


}

const deleteOrder = async (req, res) => {
    res.json({
        message: "Hi delete"
    })
}

module.exports = { createOrder, getOrders, getOrderByName, updateOrder, deleteOrder }
