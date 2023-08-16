/********************************
* File Name: Controller.js 		*
* Author: Ameen Hamza 			*
* Output: Controller for orders 	*
********************************/

const Orders = require('./Model');
const { connect } = require('mongoose');
require('dotenv').config();
const User = require('../user/Model')

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
            await Orders.create({items, totalBill, customerAddress, customerContact, customerName, customerEmail, status})
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

        const allOrders = await Orders.find()

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

module.exports = { createOrder, getOrders }