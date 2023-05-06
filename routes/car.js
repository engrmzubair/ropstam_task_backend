const express = require('express');
const router = express.Router();

const { carCreateValidation, carUpdateValidation } = require('../utils/validations/carValidation');
const validateRequest = require('../utils/validateRequest');
const requireAuth = require('../middleware/auth');
const { createCar, getCarById, getAllCars, updateCarById, deleteCarById } = require('../controllers/car');

// Routes for creating, getting all, getting by id, updating, and deleting a car
router.post('/create', requireAuth, validateRequest(carCreateValidation), createCar); // create a new car
router.get('/', requireAuth, getAllCars); // get all cars
router.get('/:id', requireAuth, getCarById); // get a car by id
router.patch('/update/:id', requireAuth, validateRequest(carUpdateValidation), updateCarById); // update a car by id
router.delete('/delete/:id', requireAuth, deleteCarById); // delete a car by id


module.exports = router;
