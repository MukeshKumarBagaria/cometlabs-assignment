# Backend Application

This is a Node.js backend application that provides APIs for role-based authentication, question and test case management, and code submissions with checking using the Sphere Engine API.

## Features

- Role-based authentication: Users can sign up, log in, and authenticate based on their roles (e.g., admin, user).
- Question management: CRUD operations for creating, reading, updating, and deleting questions.
- Test case management: CRUD operations for creating, reading, updating, and deleting test cases associated with questions.
- Code submission: API endpoint for submitting code for a specific question. The code correctness is checked using the Sphere Engine API.
- Role-based authorization: Protected routes that can only be accessed by users with specific roles.

## Technologies Used

- Node.js
- Express.js
- MongoDB 
- Mongoose (MongoDB object modeling)
- Sphere Engine API (for code correctness checking)
- JSON Web Tokens (JWT) for authentication and authorization
- bcrypt for password hashing
- Other dependencies: dotenv, passport,passport-jwt,nodemon,axios etc.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository and navigate to the project directory.
2. Install the dependencies by running the following command:
  `npm install`
3. Create a `.env` file in the root directory and configure the environment variables required for the application (e.g., database connection URL, Sphere Engine credentials, JWT secret key, etc.).
4. Start the application by running the following command:
`npm start`
5. The server should start running on the specified port, and you should see a message indicating that the server is listening for incoming requests.

## API Documentation

The API documentation for the available endpoints can be found in the [API Documentation](api-documentation.yml) file. It provides details about the request and response structures, authentication requirements, and available routes.

## Folder Structure

The folder structure of the application is as follows:

├── config
│   ├── database.js
│   ├── jwt-config.js
│   └── ...
├── controllers
│   ├── auth-controller.js
│   ├── question-controller.js
│   ├── testcase-controller.js
│   └── ...
├── middlewares
│   ├── authenticate.js
│   ├── checkRole.js
│   └── ...
├── models
│   ├── question-model.js
│   ├── testcase-model.js
│   ├── user-model.js
│   └── ...
├── repository
│   ├── auth-repository.js
│   ├── question-repository.js
│   ├── testcase-repository.js
│   └── ...
├── routes
│   ├── V1/index.js
│   ├── index.js
│   └── ...
├── services
│   ├── auth-service.js
│   ├── question-service.js
│   ├── testcase-service.js
│   └── ...
├── index.js
├── .env
├── README.md
└── ...


- `config`: Contains configuration files (e.g., database,JWT-Config).
- `controllers`: Handles the business logic for each route and client side errors.
- `middlewares`: Contains custom middleware functions (e.g., authentication, role checking).
- `models`: Defines the database models (e.g., question, test case, user).
- `repository`: Handles database operations.
- `routes`: Defines the API routes.
- `services`: Contains the core application logic and interacts with repositories.
- `index.js`: Sets up the Express app and middleware and Starts the server and listens for incoming requests.
- `README.md`: The file you are currently reading.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to modify and adapt this README file to fit your specific application's details and requirements.

Remember to update the technologies used, folder structure, and other information to match your project's setup.

