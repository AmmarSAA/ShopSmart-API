/************************************
* File Name: Controller.js          *
* Author: Ammar S.A.A               *
* Output: Controller for category   *
************************************/

const Categories = require('./Model');
const { connect } = require('mongoose');
require('dotenv').config();

///api/category/getCategory
const getCategory = async (req, res) => {
    try {
        // Connection to database
        await connect(process.env.MONGO_URI);

        // Find all categories
        const allCategory = await Categories.find();

        if (allCategory.length === 0) {
            return res.json({
                message: "Oops! No Categories.",
            });
        }

        res.json({
            message: "Success",
            categories: allCategory,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

///api/category/getCategoryByName
const getCategoryByName = async (req, res) => {
    const { Name } = req.query;
    try {
        // Connection to database
        await connect(process.env.MONGO_URI);
        const category = await Categories.findOne({ name: Name });
        res.json({ category });
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

///api/category/createCategory
const createCategory = async (req, res) => {
    const { Name, Image } = req.body;
    try {
        // Connection to database
        await connect(process.env.MONGO_URI);
        Categories.create({ name: Name, image: Image });
        res.status(201).json({ message: "Success! New Category Added." });
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

///api/category/deleteCategory
const deleteCategory = async (req, res) => {
    const { Name } = req.body;
    try {
        // Connection to database
        await connect(process.env.MONGO_URI);
        await Categories.deleteOne({ name: Name });
        res.json({ message: "Success" });
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

///api/category/updateCategory
const updateCategory = async (req, res) => {
    const { _id, Name, Image } = req.body;
    const filter = { _id };
    const update = { name: Name, image: Image };
    try {
        // Connection to database
        await connect(process.env.MONGO_URI);
        await Categories.findOneAndUpdate(filter, update, {
            new: true,
        });
        const categories = await Categories.find();
        res.json({
            message: "Success",
            categories,
        });
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

module.exports = { getCategory, getCategoryByName, createCategory, deleteCategory, updateCategory };
