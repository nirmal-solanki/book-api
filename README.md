# Book Management API

A simple Node.js RESTful API for managing books.

## Features

- Create, read, update, and delete books.
- Store book information in a MongoDB database.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)

## Prerequisites
- Node.js and npm installed.
- MongoDB database set up.

# Installation
To set up and configure this project, follow these steps based on your desired environment:

### Development Environment
1. Create a `.env.development` file in the root of your project.
2. Copy and paste the `ENV Configuration` into the `.env.development` file.
3. Save the `.env.development` file.
4. Install project dependencies using npm: `npm install`.
5. Run the project in development mode: `npm run dev`

### Staging Environment
1. Create a `.env.staging ` file in the root of your project.
2. Copy and paste the `ENV Configuration` into the `.env.staging ` file.
3. Save the `.env.staging ` file.
4. Install project dependencies using npm: `npm install`.
5. Run the project in staging mode: 
    ```
    npm run build-staging
    npm run staging
    ```

### ENV Configuration
```
#### Database Configuration
DB_HOST="your_hana_db_server_node_here"
DB_USERNAME="your_hana_db_username_here"
DB_PASSWORD="your_hana_db_password_here"
DB_NAME="your_hana_db_name_here"

### Swagger
SWAGGER_HOST_URL="your_swagger_host_url_here"

#### JWT Token Secret
JWT_SECRET="your_jwt_secret_here"
```

## Usage
To effectively use this project, follow these steps:
1. **Installation**: Follow the installation instructions in the [Installation](#installation) section to set up the project for your desired environment (development, staging).

2. **Configuration**: Review and update the configuration in the environment-specific `.env` files (e.g., `.env.development`, `.env.staging`) to match your specific settings. Replace placeholder values with actual values for database connections, APIs, and other services.

3. **Running the Application**: Use the appropriate npm scripts to start the application based on your environment:
   - For development: `npm run dev`
   - For staging: `npm run build-staging` followed by `npm run staging`

4. **API Documentation**: This project includes Swagger documentation for its APIs, making it easy to understand and interact with the available endpoints. Follow these steps to access and use the API documentation:

   - After starting the application (e.g., `npm run dev` for development), open your web browser.

   - Navigate to the Swagger documentation page using the following URL format:

     ```
     http://localhost:3000/api-docs
     ```

   - You should now see the Swagger UI, which provides a user-friendly interface to explore and interact with the available API endpoints.

## Scripts

Here are some useful scripts you can run:
- **swagger-autogen**: Generate Swagger documentation.
- **start**: Start the application in development/staging/production mode.
- **build**: Build the application, including Swagger documentation generation.
- **build-staging**: Build the application for staging environment.
- **dev**: Build the application and start it in development mode.
- **staging**: Start the application in staging environment.
