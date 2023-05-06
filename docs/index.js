const categoryRoute = require("./category.doc")
const carRoute = require("./car.doc");
const userRoute = require("./user.doc")

const userDocumentation = {
    openapi: "3.0.0",
    info: {
        title: "Ropstom Task API",
        version: "1.0.0",
        description: "This is the Ropstom Task API documentation"
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                in: 'header',
                name: 'Authorization',
                description: 'Bearer token to access these api endpoints',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        },
    ],

    tags: [
        {
            name: "User",
            description: "User routes"
        },
        {
            name: "Car",
            description: "Car routes"
        },
        {
            name: "Category",
            description: "Category routes"
        },

    ],
    paths: {
        ...userRoute,
        ...carRoute,
        ...categoryRoute

    }
}

module.exports = userDocumentation