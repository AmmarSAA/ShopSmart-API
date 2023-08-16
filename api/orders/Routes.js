/****************************
* File Name: Routes.js 		*
* Author: Ameen Hamza		*
* Output: Routes for orders 	*
****************************/

const express = require('express')
const router = express.Router()

const { createOrder, getOrders } = require('./Controller')

router.post('/createOrder', createOrder)
router.get('/getOrders', getOrders)
// router.put('/updateOrder', updateOrder)


module.exports = router