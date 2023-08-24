/****************************
* File Name: Routes.js 		*
* Author: Ammar S.A.A 		*
* Output: Routes for brand 	*
****************************/

const express = require('express')
const router = express.Router()

const { getBrand, getBrandByName, createBrand, deleteBrand, updateBrand } = require('./Controller')
const authenticateToken = require('../../middleware/authenticateToken')

router.get('/getBrand', getBrand)
router.get('/getBrandByName', getBrandByName)
router.post('/createBrand', authenticateToken, createBrand)
router.delete('/deleteBrand', authenticateToken, deleteBrand)
router.put('/updateBrand', authenticateToken, updateBrand)



module.exports = router