/********************************
* File name: Model.js 			*
* Author: Ameen Hamza			*
* Output: Model for orders 	*
********************************/

const { Timestamp } = require('mongodb');
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
<<<<<<< HEAD:api/orders/Model.js
            default : "pending"
        }
    },{
    timestamps: true
})
=======
            default: "pending",
            required: true
        }
    },
    {
        timestamps: true, // Automatically manage createdAt and updatedAt fields
    })
>>>>>>> ac51b1e794ba5c8f299500be9ceed34e07cae4ce:api/order/Model.js

const Order = model('order', OrderSchema)
module.exports = Order
