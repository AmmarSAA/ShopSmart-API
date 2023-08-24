/****************************
* File Name: Routes.js 		*
* Author: Ammar S.A.A 		*
* Output: Routes for product*
****************************/

const express = require('express')
const router = express.Router()

const { getProduct, getProductByName, createProduct, deleteProduct, updateProduct } = require('./Controller')
const authenticateToken = require('../../middleware/authenticateToken')

router.get('/getProduct', getProduct)
router.get('/getProductByName', getProductByName)
router.post('/createProduct', authenticateToken, createProduct)
router.delete('/deleteProduct', authenticateToken, deleteProduct)
router.put('/updateProduct', authenticateToken, updateProduct)



module.exports = router