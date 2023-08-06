/****************************
* File Name: Routes.js 		*
* Author: Ammar S.A.A 		*
* Output: Routes for brand 	*
****************************/

const express = require('express')
const router = express.Router()

const { getBrand, getBrandByName, createBrand, deleteBrand, updateBrand } = require('./Controller')

router.get('/getBrand', getBrand)
router.get('/getBrandByName', getBrandByName)
router.post('/createBrand', createBrand)
router.delete('/deleteBrand', deleteBrand)
router.put('/updateBrand', updateBrand)



module.exports = router