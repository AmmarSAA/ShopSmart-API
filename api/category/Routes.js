/************************************
* File Name: Routes.js 				*
* Author: Ammar S.A.A 				*
* Output: Router for categories 	*
************************************/

const express = require('express')
const router = express.Router()

const { getCategory, getCategoryByName, createCategory, deleteCategory, updateCategory } = require('./Controller')
const authenticateToken = require('../../middleware/authenticateToken')

router.get('/getCategory', getCategory)
router.get('/getCategoryByName', getCategoryByName)
router.post('/createCategory', authenticateToken, createCategory)
router.delete('/deleteCategory', authenticateToken, deleteCategory)
router.put('/updateCategory', authenticateToken, updateCategory)


module.exports = router