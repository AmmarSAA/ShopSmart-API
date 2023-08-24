/****************************
* File Name: Routes.js 		*
* Author: Ameen Hamza		*
* Output: Routes for orders 	*
****************************/

const express = require('express')
const router = express.Router()

const { ordermail, createOrder, getOrder, getOrderByEmail, getOrderByID, updateOrder, deleteOrder } = require('./Controller')

router.post('/ordermail', ordermail)
router.post('/createOrder', createOrder)
router.get('/getOrder', getOrder)
router.get('/getorder-byemail', getOrderByEmail)
router.get('/getorder-byId', getOrderByID)
router.put('/update-order', updateOrder)
router.delete('/delete-order', deleteOrder)


module.exports = router