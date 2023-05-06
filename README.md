# Ropstom Backend

This is the backend for the Ropstom car dealership application. It is built using Node.js, Express, and MongoDB. The backend provides RESTful APIs for managing cars and categories, as well as authentication.

## Getting Started

1. Clone the repository: `git clone https://github.com/engrmzubair/ropstam_task_backend.git`
2. Install dependencies: `npm install`
3. Create a `.env` file based on the `.env.example` file and update the values with your own configurations.
4. Start the server: `npm start`

## API Documentation

The API documentation is available in the `docs` folder. It includes the following endpoints:

- `POST /api/auth/signup`: Create a new user
- `POST /api/auth/login`: Login a user and get a JWT token
- `GET /api/cars`: Get all cars
- `GET /api/cars/:id`: Get a car by ID
- `POST /api/cars/create`: Create a new car
- `PATCH /api/cars/update/:id`: Update a car by ID
- `DELETE /api/cars/delete/:id`: Delete a car by ID
- `GET /api/categories`: Get all categories
- `GET /api/categories/:id`: Get a category by ID
- `POST /api/categories/create`: Create a new category
- `PATCH /api/categories/update/:id`: Update a category by ID
- `DELETE /api/categories/delete/:id`: Delete a category by ID

## Code Structure

- `app.js`: Entry point for the application
- `config`: Contains configurations for the application
- `controllers`: Contains controllers for handling API requests
- `docs`: Contains documentation for the API
- `middlewares`: Contains middlewares for the application
- `models`: Contains models for the MongoDB collections
- `routes`: Contains routes for the API
- `utils`: Contains utility functions for the application

## Environment Variables

The following environment variables are required to run the application:

- `PORT`: Port number for the server (default is 3000)
- `DB_URI`: URI for the MongoDB database
- `JWT_SECRET`: Secret key for JWT authentication
- `JWT_EXPIRES_IN`: Expiration time for JWT tokens (default is 7 days)
- `SMTP_SERVICE`: SMTP service for sending emails
- `SMTP_HOST`: SMTP host for sending emails
- `SMTP_PORT`: SMTP port for sending emails
- `SMTP_USER`: SMTP username for sending emails
- `SMTP_PASSWORD`: SMTP password for sending emails
- `EMAIL_FROM`: Email address for sending emails

## Contributing

Contributions are welcome! Please follow the following steps to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b my-new-feature`
3. Make changes and commit: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
