# Frontend - User Authentication and Management Interface

This repository contains the frontend for the User Authentication and Management System, built with React. It provides user interfaces for registration, login, and viewing a list of registered users.

## Features

- User registration with a simple and intuitive form.
 User login with email and password, storing JWT token in localStorage.
- Protected route for viewing a list of registered users, accessible only after authentication.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **React Router**: Library for routing in React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Material-UI**: React component library for building user interfaces.

## Installation

1. Clone the repository:

    ```bash
      git clone https://github.com/yourusername/frontend-repo.git
    
    ```

2. Navigate to the project directory:

    ```bash
      cd frontend-repo
    
    ```

3. Install dependencies:

    ```bash
      npm install
    
    ```

4. Set up the API endpoint:

    Edit the `src/services/api.js` file to point to your backend server:

    ```javascript
      export const api = axios.create({
          baseURL: 'http://localhost:3333'
      });
    
    ```
5. Run the application:

    ```bash
      npm start
    
    ```

The application will start on `http://localhost:5173`.

## Application Pages

### Public Pages

- **Register**: Register a new user.
- **Login**: Login with existing user credentials.

### Private Pages (Require JWT)
- **Users List**: View a list of all registered users.

### License
**This project is licensed under the MIT License.**
