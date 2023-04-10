# NodeJs-MongoDB-JWT-Docker Backend Service
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![JSON Web Tokens](https://img.shields.io/badge/JSON%20Web%20Tokens-000000?style=flat-square&logo=json-web-tokens&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)


<a href="https://www.buymeacoffee.com/kailiyang1X" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 145px !important;" ></a>
or give me a star 🌟

A backend service built using Node.js, MongoDB, JWT authentication, and Docker. This service allows you to perform CRUD operations on tasks, and includes unit tests to ensure the functionality works as expected.

## Features

- [x] register
- [x] login
- [ ] logout
- [x] demo CRUD
- [x] Unit test by Jest
- [x] JWT authentication for secure access to the API
- [x] Docker containerization for easy deployment
- [ ] Build and deploy functionality
- [ ] Security measures including TLS, helmet, XSS, CSRF, and DDOS protection
- [ ] Exception handling for a more robust service

## Getting Started

To get started, make sure you have Node.js and MongoDB installed on your machine. Then, clone the repository and install the dependencies by running:
```
git clone https://github.com/your-username/nodejs-mongodb-jwt-docker.git
cd nodejs-mongodb-jwt-docker
npm install
```

## Usage

### Environment Variables

Before running the service, you need to set up the following environment variables:

- `MONGODB_URI`: The URI of your MongoDB database.
- `JWT_SECRET`: The secret key for JWT authentication.
- `PORT`: The port number for the API server.

You can set these variables by creating a `.env` file in the root directory of the project and adding the variables in the following format:

```
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PORT=<your-port-number>
```

### Starting the Service

To start the service, run the following command:

```
npm start
```


This will start the API server on the specified port.

### API Endpoints

The API has the following endpoints:

- `GET /tasks`: Get all tasks.
- `GET /tasks/:id`: Get a task by ID.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update a task by ID.
- `DELETE /tasks/:id`: Delete a task by ID.
- `POST /users/login`: Authenticate a user and get a JWT token.

You need to include a valid JWT token in the `Authorization` header of all requests except for `POST /users/login`.

### Running Unit Tests

To run the unit tests, run the following command:

```
npm test
```

This will run all the tests in the `test` directory.

## Docker

To run the service in a Docker container, you need to have Docker installed on your machine. Then, run the following commands:

```
docker build -t nodejs-mongodb-jwt-docker .
docker run -p 3000:3000 -d nodejs-mongodb-jwt-docker
```


This will build the Docker image and start a container on port 3000.

## Security

The service includes the following security measures:

- TLS encryption
- Helmet middleware for HTTP header security
- XSS protection using `xss-clean` middleware
- CSRF protection using `csurf` middleware
- DDOS protection using `express-rate-limit` middleware

## Exception Handling

The service uses a global error handling middleware to handle exceptions and return appropriate error responses to the client. The middleware catches errors thrown by the application and sends an error response with the error message and status code.

# My Awesome Project
[NodeJs-MongoDB-JWT-Docker](https://github.com/kaili-yang/NodeJs-MongoDB-JWT-Docker)

Copyright (c) 2023 My Awesome projects

