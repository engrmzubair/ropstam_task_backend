const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const { validateRequest } = require('../utils/validateRequest');
const { validateCar } = require('../utils/validations/carValidation');

// GET /cars
router.get('/', carController.getAllCars);

// POST /cars
router.post('/', validateRequest(validateCar), carController.createCar);

// GET /cars/:id
router.get('/:id', carController.getCarById);

// PUT /cars/:id
router.put('/:id', validateRequest(validateCar), carController.updateCarById);

// DELETE /cars/:id
router.delete('/:id', carController.deleteCarById);

module.exports = router;
