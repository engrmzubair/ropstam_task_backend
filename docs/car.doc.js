const CarsResponse = {
    type: 'object',
    properties: {
        cars: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    category: {
                        type: 'string'
                    },
                    make: {
                        type: 'string'
                    },
                    model: {
                        type: 'string'
                    },
                    year: {
                        type: 'number'
                    },
                    color: {
                        type: 'string'
                    },
                    price: {
                        type: 'number'
                    }
                }
            }
        }
    }
};

const getCars = {
    tags: ['Car'],
    summary: 'Get all cars',
    description: 'Retrieve a paginated list of all cars in the database',
    parameters: [
        {
            name: 'page',
            in: 'query',
            description: 'Page number',
            required: false,
            schema: {
                type: 'integer',
                default: 1
            }
        },
        {
            name: 'limit',
            in: 'query',
            description: 'Number of cars per page',
            required: false,
            schema: {
                type: 'integer',
                default: 10
            }
        },
        {
            name: 'category',
            in: 'query',
            description: 'Filter by category ID',
            required: false,
            schema: {
                type: 'string'
            }
        },
        {
            name: 'make',
            in: 'query',
            description: 'Filter by car make',
            required: false,
            schema: {
                type: 'string'
            }
        },
        {
            name: 'model',
            in: 'query',
            description: 'Filter by car model',
            required: false,
            schema: {
                type: 'string'
            }
        },
        {
            name: 'color',
            in: 'query',
            description: 'Filter by car color',
            required: false,
            schema: {
                type: 'string'
            }
        },
        {
            name: 'minPrice',
            in: 'query',
            description: 'Filter by minimum car price',
            required: false,
            schema: {
                type: 'integer'
            }
        },
        {
            name: 'maxPrice',
            in: 'query',
            description: 'Filter by maximum car price',
            required: false,
            schema: {
                type: 'integer'
            }
        }
    ],
    responses: {
        '200': {
            description: 'A list of cars retrieved successfully',
            content: {
                'application/json': {
                    schema: CarsResponse,
                    example: {
                        cars: [
                            {
                                _id: '612993679f7489a97b659c25',
                                category: {
                                    _id: '612993329f7489a97b659c24',
                                    name: 'Sedan'
                                },
                                make: 'Toyota',
                                model: 'Camry',
                                year: 2019,
                                color: 'Silver',
                                price: 30000
                            },
                            {
                                _id: '612993e39f7489a97b659c27',
                                category: {
                                    _id: '612993329f7489a97b659c24',
                                    name: 'Sedan'
                                },
                                make: 'Honda',
                                model: 'Accord',
                                year: 2020,
                                color: 'Black',
                                price: 32000
                            }
                        ],
                        totalCount: 2,
                        totalPages: 1,
                        currentPage: 1
                    }
                }
            }
        },
        '400': {
            description: 'Bad Request. Invalid request parameters.'
        },
        '500': {
            description: 'Internal server error occurred while retrieving cars'
        }
    }
}


const createCar = {
    summary: 'Create a new car',
    description: 'Creates a new car with the given details',
    tags: ['Car'],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        category: {
                            type: 'string',
                            description: 'The ID of the category to which the car belongs',
                            example: '6165f5c5ac5bf5a5d25f1f44'
                        },
                        make: {
                            type: 'string',
                            description: 'The make of the car',
                            example: 'Toyota'
                        },
                        model: {
                            type: 'string',
                            description: 'The model of the car',
                            example: 'Corolla'
                        },
                        year: {
                            type: 'integer',
                            description: 'The year of the car',
                            example: 2021
                        },
                        color: {
                            type: 'string',
                            description: 'The color of the car',
                            example: 'Blue'
                        },
                        price: {
                            type: 'number',
                            description: 'The price of the car in USD',
                            example: 25000.5
                        }
                    },
                    required: ['category', 'make', 'model', 'year', 'color', 'price']
                }
            }
        },
        required: true
    },
    responses: {
        '201': {
            description: 'Car created successfully',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            car: {
                                type: 'object',
                                properties: {
                                    _id: {
                                        type: 'string',
                                        description: 'The unique ID of the car'
                                    },
                                    category: {
                                        type: 'string',
                                        description: 'The ID of the category to which the car belongs'
                                    },
                                    make: {
                                        type: 'string',
                                        description: 'The make of the car'
                                    },
                                    model: {
                                        type: 'string',
                                        description: 'The model of the car'
                                    },
                                    year: {
                                        type: 'integer',
                                        description: 'The year of the car'
                                    },
                                    color: {
                                        type: 'string',
                                        description: 'The color of the car'
                                    },
                                    price: {
                                        type: 'number',
                                        description: 'The price of the car in USD'
                                    },
                                    registrationNo: {
                                        type: 'string',
                                        description: 'The registration number of the car'
                                    },
                                    createdAt: {
                                        type: 'string',
                                        format: 'date-time',
                                        description: 'The date and time when the car was created'
                                    },
                                    updatedAt: {
                                        type: 'string',
                                        format: 'date-time',
                                        description: 'The date and time when the car was last updated'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '400': {
            description: 'Invalid request body'
        },
        '401': {
            description: 'Unauthorized'
        },
        '500': {
            description: 'Internal server error'
        }
    }
}

const getCarByIdDoc = {
    tags: ['Car'],
    description: 'Get a car by ID',
    summary: 'Get a car by ID',
    operationId: 'getCarById',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'ID of the car',
            required: true,
            schema: {
                type: 'string',
                example: '61234567890abcdef123456'
            }
        }
    ],
    responses: {
        200: {
            description: 'Car found',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            car: {
                                type: 'object',
                                properties: {
                                    _id: { type: 'string', example: '61234567890abcdef123456' },
                                    category: { type: 'string', example: 'Sedan' },
                                    make: { type: 'string', example: 'Toyota' },
                                    model: { type: 'string', example: 'Camry' },
                                    year: { type: 'number', example: 2020 },
                                    color: { type: 'string', example: 'White' },
                                    price: { type: 'number', example: 25000 }
                                }
                            }
                        }
                    }
                }
            }
        },
        404: {
            description: 'Car not found',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: { type: 'string', example: 'Car not found' }
                        }
                    }
                }
            }
        },
        500: {
            description: 'Server error occurred while retrieving car',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: { type: 'string', example: 'Server error occurred while retrieving car' }
                        }
                    }
                }
            }
        }
    }
};

const updateCarById = {
    tags: ['Car'],
    description: 'Update a car by ID',
    summary: 'Update a car by ID',
    operationId: 'updateCarById',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'ID of the car to update',
            required: true,
            schema: {
                type: 'string',
                format: 'objectId',
                example: '6074f7e019b4d65eb31d1b20'
            }
        }
    ],
    requestBody: {
        description: 'New details of the car',
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        category: {
                            type: 'string',
                            description: 'ID of the car category',
                            example: '6074f7e019b4d65eb31d1b21'
                        },
                        color: {
                            type: 'string',
                            description: 'Color of the car',
                            example: 'Red'
                        },
                        model: {
                            type: 'string',
                            description: 'Model of the car',
                            example: 'Civic'
                        },
                        make: {
                            type: 'string',
                            description: 'Make of the car',
                            example: 'Honda'
                        },
                        registrationNo: {
                            type: 'string',
                            description: 'Registration number of the car',
                            example: 'AB1234'
                        }
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: 'Car updated successfully',
            content: {
                'application/json': {
                    schema: CarsResponse
                }
            }
        },
        404: {
            description: 'Car not found'
        },
        500: {
            description: 'Server error occurred while updating car'
        }
    }
}

const deleteCarById = {
    tags: ['Car'],
    description: 'Deletes a car by ID',
    summary: 'Deletes a car by ID',
    operationId: 'deleteCarById',
    parameters: [
        {
            name: 'id',
            in: 'path',
            required: true,
            description: 'ID of the car to delete',
            schema: {
                type: 'string'
            }
        }
    ],
    responses: {
        '204': {
            description: 'Car deleted successfully'
        },
        '404': {
            description: 'Car not found'
        },
        '500': {
            description: 'Server error occurred while deleting the car'
        }
    }
};


const carRouteDoc = {
    "/api/cars/": {
        get: getCars
    },
    "/api/cars/create": {
        post: createCar
    },
    "/api/cars/:id": {
        get: getCarByIdDoc
    },
    "/api/cars/update/:id": {
        patch: updateCarById
    },
    "/api/cars/delete/:id": {
        delete: deleteCarById
    },


};
module.exports = carRouteDoc;