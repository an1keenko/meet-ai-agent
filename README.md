# MEET-AI - E-commerce Website

## Overview

This project is a full-featured **E-commerce Website** developed using the **MERN stack** (MongoDB, Express.js, React, Node.js). It includes a secure authentication system using **JWT (JSON Web Tokens)** and role-based authorization for admin and user access. The application uses **Redux** for state management, providing a centralized store to handle user sessions, products, and cart functionality efficiently.

> Try the app - [Go to website]()

## Features

- **Authentication**: Secure user registration and login using JWT.
- **Role-Based Authorization**: Admin users have privileged access to manage products, orders, and users, while regular users can browse and purchase products.
- **Product Management**: Add, edit, and delete products (admin access only).
- **Cart System**: Add items to a cart and proceed to checkout.
- **Order Management**: Place orders and view order history.
- **Search and Filtering**: Search products and filter them by categories, price range, and more.
- **Responsive Design**: Mobile-friendly user interface.

## Tech Stack

### Frontend

- **Next.js**: For building a dynamic and responsive user interface.
- **Redux**: For managing application state in a centralized store.
- **Axios**: For API communication.

### Backend

- **Node.js**: For server-side scripting.
- **Express.js**: For building RESTful APIs.
- **MongoDB**: As the NoSQL database for persistent storage.
- **JWT**: For secure user authentication and session management.

### Other Tools

- **Postman**: For API testing.
- **Mongoose**: For MongoDB object modeling.
- **Git**: For version control.

## System Architecture

The application follows a **3-tier architecture**:

1. **Frontend**: Handles user interactions and communicates with the backend via REST APIs.
2. **Backend**: Implements business logic, authentication, and API endpoints.
3. **Database**: Stores user information, product details, and orders.

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB

### Steps to Run

#### Backend

1. Clone the repository and navigate to the backend folder:
   ```bash
   git clone https://github.com/.git
   cd Lavishta
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in a `/backend/config/config.env` file:
   ```env
   DATABASE_URL=<Your_DB_URL>
   BETTER_AUTH_SECRET=<Your_Better_Auth_Secret>
   BETTER_AUTH_URL=<Your_Better_Auth_URL>
   GITHUB_CLIENT_ID=<Your_Github_Client_Secret_Key>
   GITHUB_CLIENT_SECRET=<Your_Github_Client_Secret_Key>
   GOOGLE_CLIENT_ID=<Your_Google_Client_ID>
   GOOGLE_CLIENT_SECRET=<Your_Google_Client_Secret_Key>
   NEXT_APP_URL="http://localhost:3000"
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

#### Access the Application

- Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **User Registration/Login**: Create an account or log in to access features.
2. **Browse Products**: Explore products and add them to your cart.
3. **Admin Access**: Log in as an admin to manage products, orders, and users.
4. **Place Orders**: Add items to your cart and proceed to checkout.
5. **Order History**: View your past orders in the user dashboard.

## Contact

- **Email**: mir.saif.ali2004@gmail.com
