/********************************
* File Name: Controller.js 		*
* Author: Ammar S.A.A 			*
* Output: Controller for product*
********************************/

const Products = require('./Model');
const { connect } = require('mongoose');
require('dotenv').config();

// /api/product/getProduct
const getAllProducts = async (req, res) => {
	try {
		// Connection to database
		await connect(process.env.MONGO_URI);

		// Find all products
		const allProducts = await Products.find();

		if (allProducts.length === 0) {
			return res.json({
				message: "Oops! No Products.",
			});
		}

		res.json({
			message: "Success",
			products: allProducts,
		});
	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error",
			error: error.message,
		});
	}
};

// /api/product/getProductByName
const getProductByName = async (req, res) => {
	const { name } = req.query;
	try {
		// Connection to database
		await connect(process.env.MONGO_URI);
		const product = await Products.findOne({ name });
		res.json({ product });
	} catch (error) {
		res.json({
			message: error.message,
		});
	}
};

// /api/product/createProduct
const createProduct = async (req, res) => {
	const {
		name,
		stock,
		retailPrice,
		purchasePrice,
		discountPercentage,
		brandID,
		catID,
		description,
		images,
	} = req.body;

	try {
		// Connection to database
		await connect(process.env.MONGO_URI);

		const newProduct = new Products({
			name,
			stock,
			retailPrice,
			purchasePrice,
			discountPercentage,
			brandID,
			catID,
			description,
			images,
		});

		await newProduct.save();

		res.status(201).json({ message: "Product created successfully" });
	} catch (error) {
		res.json({
			message: error.message,
		});
	}
};

// /api/product/deleteProduct
const deleteProduct = async (req, res) => {
	const { name } = req.body;
	try {
		// Connection to database
		await connect(process.env.MONGO_URI);

		const deletedProduct = await Products.deleteOne({ name });

		if (deletedProduct.deletedCount === 0) {
			return res.status(404).json({ message: "Product not found" });
		}

		res.json({ message: "Product deleted successfully" });
	} catch (error) {
		res.json({
			message: error.message,
		});
	}
};

// /api/product/updateProduct
const updateProduct = async (req, res) => {
	const {
		_id,
		name,
		stock,
		retailPrice,
		purchasePrice,
		discountPercentage,
		brandID,
		catID,
		description,
		images,
	} = req.body;

	const filter = { _id };
	const update = {
		name,
		stock,
		retailPrice,
		purchasePrice,
		discountPercentage,
		brandID,
		catID,
		description,
		images,
	};

	try {
		// Connection to database
		await connect(process.env.MONGO_URI);

		const updatedProduct = await Products.findOneAndUpdate(filter, update, {
			new: true,
		});

		if (!updatedProduct) {
			return res.status(404).json({ message: "Product not found" });
		}

		res.json({
			message: "Product updated successfully",
			product: updatedProduct,
		});
	} catch (error) {
		res.json({
			message: error.message,
		});
	}
};

module.exports = {
	getAllProducts,
	getProductByName,
	createProduct,
	deleteProduct,
	updateProduct,
};
