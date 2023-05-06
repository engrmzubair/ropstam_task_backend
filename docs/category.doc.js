

const ErrorResponse = {
    type: 'object',
    properties: {
        message: {
            type: 'string'
        }
    }
};

const Category = {
    type: 'object',
    properties: {
        _id: {
            type: 'string',
            example: '609c2a8a1a0dbb3b6b79f7c8'
        },
        name: {
            type: 'string',
            example: 'Sedan'
        }
    }
};


const getCategories = {
    tags: ['Category'],
    summary: 'Get all categories',
    responses: {
        200: {
            description: 'List of categories',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            categories: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        name: {
                                            type: 'string'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        500: {
            description: 'Server error occurred while getting categories'
        }
    }
}

const createCategory = {
    tags: ['Category'],
    summary: 'Create a new category',
    requestBody: {
        description: 'Category object to be created',
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            example: 'SUV'
                        }
                    }
                }
            }
        }
    },
    responses: {
        201: {
            description: 'Category created successfully',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            category: {
                                type: 'object',
                                properties: {
                                    _id: {
                                        type: 'string',
                                        example: '609d25e5200a4c4d09e3bbcf'
                                    },
                                    name: {
                                        type: 'string',
                                        example: 'SUV'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        400: {
            description: 'Invalid input',
            content: {
                'application/json': {
                    schema: ErrorResponse
                }
            }
        },
        409: {
            description: 'Category already exists',
            content: {
                'application/json': {
                    schema: ErrorResponse
                }
            }
        },
        500: {
            description: 'Internal server error',
            content: {
                'application/json': {
                    schema: ErrorResponse
                }
            }
        }
    }
};

const getCategoryById = {

    tags: ['Category'],
    // Short description of the endpoint
    summary: 'Get a category by ID',

    // Optional longer description
    description: 'Get a single category from the database by its ID.',

    // Request parameters
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'ID of the category to get',
            required: true,
            schema: {
                type: 'string',
                format: 'ObjectId'
            }
        }
    ],

    // Successful response
    responses: {
        200: {
            description: 'Category successfully retrieved',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            category: {
                                type: 'object',
                                properties: {
                                    _id: {
                                        type: 'string',
                                        format: 'ObjectId'
                                    },
                                    name: {
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        // Error response
        404: {
            description: 'Category not found',
            content: {
                'application/json': {
                    schema: ErrorResponse
                }
            }
        }
    }
}

const updateCategoryById = {
    tags: ['Category'], // Operation tags
    description: 'Update a category by ID', // Operation description
    summary: 'Update a category by ID', // summary
    operationId: 'updateCategoryById', // Unique operation ID
    parameters: [
        {
            // ID parameter
            name: 'id',
            in: 'path',
            description: 'ID of category to update',
            required: true,
            schema: {
                type: 'string',
            },
        },
    ],
    requestBody: {
        // Request body
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            description: 'New name of category',
                        },
                    },
                },
            },
        },
    },
    responses: {
        // Responses for this operation
        200: {
            description: 'Category updated successfully',
            content: {
                'application/json': {
                    schema: Category,
                },
            },
        },
        400: {
            description: 'Invalid request body',
            content: {
                'application/json': {
                    schema: ErrorResponse,
                },
            },
        },
        404: {
            description: 'Category not found',
            content: {
                'application/json': {
                    schema: ErrorResponse,
                },
            },
        },
        500: {
            description: 'Server error',
            content: {
                'application/json': {
                    schema: ErrorResponse,
                },
            },
        },
    },
}

const deleteCategoryById = {
    tags: ['Category'],
    description: 'Delete a category by ID',
    summary: 'Delete a category by ID',
    operationId: 'deleteCategoryById',
    parameters: [
        {
            name: 'categoryId',
            in: 'path',
            description: 'ID of the category to delete',
            required: true,
            schema: {
                type: 'string',
                format: 'objectId',
            },
        },
    ],
    responses: {
        200: {
            description: 'Category deleted successfully',
        },
        400: {
            description: 'Cannot delete category as it is associated with a car',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Cannot delete category as it is associated with a car',
                            },
                        },
                    },
                },
            },
        },
        404: {
            description: 'Category not found',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Category not found',
                            },
                        },
                    },
                },
            },
        },
        500: {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                            },
                        },
                    },
                },
            },
        },
    },
};







const categoryRouteDoc = {
    "/api/categories/create": {
        post: createCategory
    },
    "/api/categories/": {
        get: getCategories
    },
    "/api/categories/:id": {
        get: getCategoryById
    },
    "/api/categories/update/:id": {
        patch: updateCategoryById
    },
    "/api/categories/delete/:id": {
        delete: deleteCategoryById
    },


};
module.exports = categoryRouteDoc;