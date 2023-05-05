const Car = require('../models/car');

// Create a new car
const createCar = async (req, res, next) => {
    try {
        const { category, color, model, make, registrationNo } = req.body;
        const car = new Car({
            category,
            color,
            model,
            make,
            registrationNo,
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
        const cars = await Car.find({});
        res.status(200).json({ cars });
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
        const { category, color, model, make, registrationNo } = req.body;
        car.category = category || car.category;
        car.color = color || car.color;
        car.model = model || car.model;
        car.make = make || car.make;
        car.registrationNo = registrationNo || car.registrationNo;
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
        await car.remove();
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
