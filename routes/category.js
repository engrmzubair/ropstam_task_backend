// Import necessary packages and modules
const express = require('express');
const router = express.Router();

// Import validation functions for category
const { categoryCreateValidation, categoryUpdateValidation } = require('../utils/validations/categoryValidation');
// Import middleware for validating requests
const validateRequest = require('../utils/validateRequest');
// Import middleware for requiring authentication
const requireAuth = require('../middleware/auth');
// Import controller functions for category
const { createCategory, getAllCategories, getCategoryById, updateCategoryById, deleteCategoryById } = require('../controllers/category');

// Define routes for handling category requests
router.post('/create', requireAuth, validateRequest(categoryCreateValidation), createCategory); // create a new category
router.get('/', requireAuth, getAllCategories); // get all categories
router.get('/:id', requireAuth, getCategoryById); // get a category by ID
router.patch('/update/:id', requireAuth, validateRequest(categoryUpdateValidation), updateCategoryById); // update a category by ID
router.delete('/delete/:id', requireAuth, deleteCategoryById); // delete a category by ID

// Export the router module for use in the application
module.exports = router;
