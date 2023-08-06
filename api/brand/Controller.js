/********************************
* File Name: Controller.js 		*
* Author: Ammar S.A.A 			*
* Output: Controller for brand 	*
********************************/

const Brands = require('./Model');
const { connect } = require('mongoose');
require('dotenv').config();

///api/brand/getBrand
const getBrand = async (req, res) => {
	try {
		// Connection to database
		await connect(process.env.MONGO_URI);

		// Find all brands
		const allBrand = await Brands.find();

		if (allBrand.length === 0) {
			return res.json({
				message: "Oops! No Brands.",
			});
		}

		res.json({
			message: "Success",
			brands: allBrand,
		});
	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error",
			error: error.message,
		});
	}
};

///api/brand/getBrandByName
const getBrandByName = async (req, res) => {
	const { Name } = req.query;
	try {
		// Connection to database
		await connect(process.env.MONGO_URI);
		const brand = await Brands.findOne({ name: Name });
		res.json({ brand });
	} catch (error) {
		res.json({
			message: error.message,
		});
	}
};

///api/brand/createBrand
const createBrand = async (req, res) => {
	const { Name, Image } = req.body;
	try {
		// Connection to database
		await connect(process.env.MONGO_URI);
		Brands.create({ name: Name, image: Image });
		res.status(201).json({ message: "Success" });
	} catch (error) {
		res.json({
			message: error.message,
		});
	}
};

///api/brand/deleteBrand
const deleteBrand = async (req, res) => {
	const { Name } = req.body;
	try {
		// Connection to database
		await connect(process.env.MONGO_URI);
		await Brands.deleteOne({ name: Name });
		res.json({ message: "Success" });
	} catch (error) {
		res.json({
			message: error.message,
		});
	}
};

///api/brand/updateBrand
const updateBrand = async (req, res) => {
	const { _id, Name, Image } = req.body;
	const filter = { _id };
	const update = { name: Name, image: Image };
	try {
		// Connection to database
		await connect(process.env.MONGO_URI);
		await Brands.findOneAndUpdate(filter, update, {
			new: true,
		});
		const brands = await Brands.find();
		res.json({
			message: "Success",
			brands,
		});
	} catch (error) {
		res.json({
			message: error.message,
		});
	}
};

module.exports = { getBrand, getBrandByName, createBrand, deleteBrand, updateBrand };
