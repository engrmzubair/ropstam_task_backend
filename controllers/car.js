const Car = require('../models/car');

// Create a new car
const createCar = async (req, res, next) => {
    try {
        const { category, color, model, make, year, price } = req.body;
        const car = new Car({
            category,
            color,
            model,
            make,
            year,
            price
        });
        const newCar = await car.save();
        res.status(201).json({ car: newCar });
    } catch (error) {
        next(error);
    }
};

// Get all cars
const getAllCars = async (req, res, next) => {
    try {
        const { page = 1, limit = 6, category, make, model, color, minPrice, maxPrice, year } = req.query;

        const query = {};
        if (category) query.category = category;
        if (make) query.make = make;
        if (year) query.year = year;
        if (model) query.model = model;
        if (color) query.color = color;
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = parseInt(minPrice);
            if (maxPrice) query.price.$lte = parseInt(maxPrice);
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);
        const limitCount = parseInt(limit);

        const cars = await Car.find(query).populate('category').skip(skip).limit(limitCount);
        const totalCount = await Car.countDocuments(query);

        const totalPages = Math.ceil(totalCount / limitCount);
        const currentPage = parseInt(page);

        res.status(200).json({ cars, totalCount, totalPages, currentPage });
    } catch (error) {
        next(error);
    }
};




// Get a car by ID
const getCarById = async (req, res, next) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json({ car });
    } catch (error) {
        next(error);
    }
};

// Update a car by ID
const updateCarById = async (req, res, next) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        const { category, color, model, make, year, price } = req.body;
        car.category = category || car.category;
        car.color = color || car.color;
        car.model = model || car.model;
        car.make = make || car.make;
        car.year = year || car.year;
        car.price = price || car.price;
        const updatedCar = await car.save();
        res.status(200).json({ car: updatedCar });
    } catch (error) {
        next(error);
    }
};

// Delete a car by ID
const deleteCarById = async (req, res, next) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        await car.deleteOne();
        res.status(204).end();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createCar,
    getAllCars,
    getCarById,
    updateCarById,
    deleteCarById,
};
