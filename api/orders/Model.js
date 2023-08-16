/********************************
* File name: Model.js 			*
* Author: Ameen Hamza			*
* Output: Model for orders 	*
********************************/

const { Schema, model } = require('mongoose');

const OrderSchema = new Schema(
    {
        items: {
            type: Array,
            required: true
        },
        totalBill: {
            type: String,
            required: true
        },
        customerAddress: {
            type: String,
            required: true
        },
        customerContact: {
            type: String,
            required: true
        },
        customerName: {
            type: String,
            required: true
        },
        customerEmail: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    })

const Order = model('order', OrderSchema)
module.exports = Order
