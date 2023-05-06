

const signup = {
    tags: ['User'],
    description: 'Creates a new user account',
    summary: 'Creates a new user account',
    operationId: 'signup',
    requestBody: {
        description: 'User object to be created',
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            example: 'John Doe'
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            example: 'johndoe@example.com'
                        }
                    },
                    required: ['name', 'email', 'password']
                }
            }
        }
    },
    responses: {
        '201': {
            description: 'User created successfully'
        },
        '400': {
            description: 'Invalid request body'
        },
        '409': {
            description: 'User with the same email already exists'
        },
        '500': {
            description: 'Server error'
        }
    }
}


const login = {
    summary: 'Log in an existing user',
    tags: ['User'],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        email: { type: 'string', format: 'email', description: 'User email' },
                        password: { type: 'string', description: 'User password' }
                    },
                    required: ['email', 'password']
                }
            }
        }
    },
    responses: {
        200: {
            description: 'User logged in successfully',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            token: { type: 'string', description: 'Access token for the user' }
                        },
                        required: ['token']
                    }
                }
            }
        },
        401: {
            description: 'Invalid email or password',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: { type: 'string', description: 'Error message' }
                        },
                        required: ['message']
                    }
                }
            }
        },
        500: {
            description: 'Server error occurred while logging in user',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: { type: 'string', description: 'Error message' }
                        },
                        required: ['message']
                    }
                }
            }
        }
    }
}
















const userRouteDoc = {
    "/api/auth/signup": {
        post: signup
    },
    "/api/auth/login": {
        post: login
    },

};
module.exports = userRouteDoc;