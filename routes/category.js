const express = require('express');
const router = express.Router();

const { categoryCreateValidation, categoryUpdateValidation } = require('../utils/validations/categoryValidation');
const validateRequest = require('../utils/validateRequest');
const requireAuth = require('../middleware/auth');
const { createCategory, getAllCategories, getCategoryById, updateCategoryById, deleteCategoryById } = require('../controllers/category');

router.post('/create', requireAuth, validateRequest(categoryCreateValidation), createCategory);
router.get('/', requireAuth, getAllCategories);
router.get('/:id', requireAuth, getCategoryById);
router.patch('/update/:id', requireAuth, validateRequest(categoryUpdateValidation), updateCategoryById);
router.delete('/delete/:id', requireAuth, deleteCategoryById);

module.exports = router;
