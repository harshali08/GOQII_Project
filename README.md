
# User Management System

## Overview

This project is a full-stack application for managing user data. It includes a backend RESTful API built with Node.js, a frontend application built with React, and a SQL database for storing user information. The system supports CRUD (Create, Read, Update, Delete) operations for user entities, including fields such as name, email, password, and date of birth (DOB).

## Project Structure

- **Backend**: Node.js application providing RESTful API endpoints for CRUD operations.
- **Frontend**: React application for interacting with the API and displaying user data.
- **Database**: SQL schema for storing user data.

## Features

- **View Users**: List all users with their details.
- **Add User**: Create a new user.
- **Update User**: Modify existing user details.
- **Delete User**: Remove a user from the system.

## Setup Instructions

### Prerequisites

- Node.js and npm installed
- MySQL or MariaDB installed
- Git installed

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system
   ```

2. **Navigate to the Backend Directory**

   ```bash
   cd backend
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Configure the Database**

   - Create a MySQL database named `crud`.
   - Use the following SQL script to create the `users` table:

     ```sql
     CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       Name VARCHAR(255) NOT NULL,
       Email VARCHAR(255) NOT NULL UNIQUE,
       Password VARCHAR(255) NOT NULL,
       DOB DATE
     );
     ```

5. **Start the Backend Server**

   ```bash
   nodemon index.js
   ```

   The server will be running at `http://localhost:8081`.

### Frontend Setup

1. **Navigate to the Frontend Directory**

   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the React Application**

   ```bash
   npm start
   ```

   The application will be running at `http://localhost:3000`.

### Using the Application

1. **Viewing All Users**: Navigate to the main page to see a list of all users.
2. **Adding Users**: Use the form to add new users to the system.
3. **Viewing User**:Click on the "View" button next to a user to view their information.
4. **Updating Users**: Click on the "Edit" button next to a user to update their information.
5. **Deleting Users**: Click on the "Delete" button next to a user to remove them from the system. A confirmation dialog will appear before deletion.


## Assumptions and Decisions

- **Database**: Used MySQL for database management due to its ease of use and popularity.
- **Frameworks**: Node.js for the backend and React for the frontend to leverage their strengths in building RESTful APIs and interactive user interfaces, respectively.


## Contact

If you have any questions or need further clarifications, please reach out to harshalifarde@gmail.com.


