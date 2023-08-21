/****************************
* File Name: Routes.js 		*
* Author: Ameen Hamza		*
* Output: Routes for orders 	*
****************************/

const express = require('express')
const router = express.Router()

const { demomail, createOrder, getOrders, getOrderByEmail, getOrderByID, updateOrder, deleteOrder, allOrders } = require('./Controller')

router.post('/demomail', demomail)
router.post('/createOrder', createOrder)
router.get('/getOrders', getOrders)
router.get('/getorder-byemail', getOrderByEmail)
router.get('/getorder-byId', getOrderByID)
router.put('/update-order', updateOrder)
router.delete('/delete-order', deleteOrder)
router.get('/all-orders', allOrders)


module.exports = router