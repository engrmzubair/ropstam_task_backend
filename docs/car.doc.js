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
    description: 'Retrieve a list of all cars in the database',
    responses: {
        '200': {
            description: 'A list of all cars',
            content: {
                'application/json': {
                    schema: CarsResponse,
                    example: {
                        cars: [
                            {
                                category: 'Sedan',
                                make: 'Toyota',
                                model: 'Camry',
                                year: 2019,
                                color: 'Silver',
                                price: 30000
                            },
                            {
                                category: 'SUV',
                                make: 'Honda',
                                model: 'CR-V',
                                year: 2020,
                                color: 'White',
                                price: 35000
                            }
                        ]
                    }
                }
            }
        },
        '500': {
            description: 'Server error occurred while retrieving cars'
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