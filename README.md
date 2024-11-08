# Node.js API with MongoDB and JWT Authentication

A simple Node.js API with CRUD operations, JWT-based authentication, and MongoDB integration.

## Features

- **User Authentication**: Registration and Login with JWT for secure access.
- **Password Encryption**: Passwords are securely hashed with bcrypt.
- **Protected Routes**: Endpoints are protected with JWT authentication middleware.
- **MongoDB Database**: Data persistence with Mongoose ORM.

## Setup

### Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** database (local or cloud)
- **Git** for version control

### Installation

1. **Clone the Repository**:
   ```
   git clone https://github.com/YashVermaDev/SampleSystem.git
   cd SampleSystem
   ```

2. Install Dependencies
    ```npm install```

3. Set Up Environment Variables: Create a .env file in the root with these values:
    ``` 
    PORT=3000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    JWT_EXPIRES_IN=1h
    ```

4. Run the server
    ```npm start```