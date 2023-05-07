const Category = require('../models/category');
const Car = require('../models/car');

const createCategory = async (req, res, next) => {
    try {
        const { name } = req.body;

        const category = new Category({ name });
        await category.save();

        res.status(201).json({ message: 'Category created successfully', category });
    } catch (error) {
        next(error);
    }
};

const getAllCategories = async (req, res, next) => {
    try {
        const categories = await Category.find();

        res.status(200).json({ categories });
    } catch (error) {
        next(error);
    }
};

const getCategoryById = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json({ category });
    } catch (error) {
        next(error);
    }
};

const updateCategoryById = async (req, res, next) => {
    try {
        const { name } = req.body;

        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        category.name = name;
        await category.save();

        res.status(200).json({ message: 'Category updated successfully', category });
    } catch (error) {
        next(error);
    }
};

const deleteCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Check if any car is using this category
        const car = await Car.findOne({ category: category._id });

        if (car) {
            return res.status(400).json({ message: 'Cannot delete category as it is associated with a car' });
        }

        await category.deleteOne();

        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
};
