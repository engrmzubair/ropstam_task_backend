const express = require('express');
const router = express.Router();

const { categoryCreateValidation, categoryUpdateValidation } = require('../utils/validations/categoryValidation');
const { validateRequest } = require('../middleware/validationMiddleware');
const { requireAuth } = require('../middleware/authMiddleware');
const { createCategory, getCategories, getCategoryById, updateCategoryById, deleteCategoryById } = require('../controllers/category');

router.post('/', requireAuth, validateRequest(categoryCreateValidation), createCategory);
router.get('/', requireAuth, getCategories);
router.get('/:id', requireAuth, getCategoryById);
router.patch('/:id', requireAuth, validateRequest(categoryUpdateValidation), updateCategoryById);
router.delete('/:id', requireAuth, deleteCategoryById);

module.exports = router;
