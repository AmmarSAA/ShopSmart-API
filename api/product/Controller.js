/********************************
* File Name: Controller.js 		*
* Author: Ammar S.A.A 			*
* Output: Controller for product*
********************************/

const Products = require('./Model')
const { connect } = require('mongoose')
require('dotenv').config()

///api/product/getProduct
const getProduct = async (req, res) => {

	try {
		//Connection to database
		await connect(process.env.MONGO_URI)

		//Find all products
		const allProduct = await Products.find()

		if (allProduct.length === 0) {
			return res.json({
				message: "Oops! No Products."
			})
		}

		res.json({
			message: "Success",
			products: allProduct
		})
	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error",
			error: error.message
		})
	}
}

///api/product/getProductByName
const getProductByName = async (req, res) => {

	const { Name } = req.query
	try {
		//Connection to database
		await connect(process.env.MONGO_URI)
		const product = await Products.findOne({ Name })
		res.json({ product })

	} catch (error) {
		res.json({
			message: error.message
		})
	}
}

///api/product/createProduct
const createProduct = async (req, res) => {
	const { Name, Image } = req.body
	try {
		//Connection to database
		await connect(process.env.MONGO_URI)
		Products.create({ Name, Image })
		res.status(201).json({ message: "Success" })

	}

	catch (error) {
		res.json({
			message: error.message
		})
	}
}

///api/product/deleteProduct
const deleteProduct = async (req, res) => {
	const { Name } = req.body
	try {
		//Connection to database
		await connect(process.env.MONGO_URI)
		await Products.deleteOne({ Name })
		res.json({ message: "Success" })

	} catch (error) {
		res.json({
			message: error.message
		})
	}
}

///api/product/updateProduct
const updateProduct = async (req, res) => {

	const { _id, Name, Image } = req.body

	const filter = { _id };
	const update = { Name, Image };

	try {
		//Connection to database
		await connect(process.env.MONGO_URI)
		await Products.findOneAndUpdate(filter, update, {
			new: true
		})

		const products = await Products.find()

		res.json({
			message: "Success",
			products
		})

	}

	catch (error) {
		res.json({
			message: error.message,
		})
	}
}


module.exports = { getProduct, getProductByName, createProduct, deleteProduct, updateProduct }