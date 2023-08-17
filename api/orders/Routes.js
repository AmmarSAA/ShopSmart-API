/****************************
* File Name: Routes.js 		*
* Author: Ameen Hamza		*
* Output: Routes for orders 	*
****************************/

const express = require('express')
const router = express.Router()

const { createOrder, getOrders, getOrderByName, updateOrder, deleteOrder } = require('./Controller')

router.post('/createOrder', createOrder)
router.get('/getOrders', getOrders)
router.get('/getorder-byname', getOrderByName)
router.put('/update-order', updateOrder)
router.delete('/delete-order', deleteOrder)


module.exports = router