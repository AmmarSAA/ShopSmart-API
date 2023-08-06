/************************************
* File Name: Routes.js 				*
* Author: Ammar S.A.A 				*
* Output: Router for categories 	*
************************************/

const express = require('express')
const router = express.Router()

const { getCategory, getCategoryByName, createCategory, deleteCategory, updateCategory } = require('./Controller')

router.get('/getCategory', getCategory)
router.get('/getCategoryByName', getCategoryByName)
router.post('/createCategory', createCategory)
router.delete('/deleteCategory', deleteCategory)
router.put('/updateCategory', updateCategory)


module.exports = router