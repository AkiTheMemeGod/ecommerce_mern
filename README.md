# MERN E-commerce Platform

A full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React, Node.js). This project features user authentication, product browsing, cart management, and order placement, providing a modern shopping experience.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Backend Overview](#backend-overview)
- [Frontend Overview](#frontend-overview)
- [Setup & Installation](#setup--installation)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features
- User registration and login with JWT authentication
- Secure password hashing (bcrypt)
- Product catalog with categories and images
- Shopping cart (add, update, remove items)
- Order placement and order history
- Responsive UI with React, Tailwind CSS, and DaisyUI

---

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, DaisyUI, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs, dotenv, cors

---

## Project Structure
```
ecommerce_mern/
├── backend/
│   ├── src/
│   │   ├── config/         # Database config
│   │   ├── controllers/    # Route controllers (auth, cart, order, products)
│   │   ├── middleware/     # Auth middleware
│   │   ├── models/         # Mongoose models (User, Product, Cart, Order)
│   │   ├── Routes/         # Express route definitions
│   │   ├── seeders/        # DB seeding scripts
│   │   └── server.js       # App entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React UI components
│   │   ├── context/        # React context (if any)
│   │   ├── pages/          # Main pages (Home, Auth, Cart, Product)
│   │   ├── services/       # Axios API utilities
│   │   └── App.jsx         # App entry point
│   ├── public/
│   ├── index.html
│   └── package.json
└── README.md
```

---

## Backend Overview
- **Express.js REST API** with endpoints for authentication, products, cart, and orders
- **MongoDB** for data storage (users, products, carts, orders)
- **JWT** for secure authentication
- **bcryptjs** for password hashing
- **Mongoose** for schema modeling

### Main Models
- **User:** name, email, passwordHash
- **Product:** name, description, price, category, stock, imageUrl
- **Cart:** userId, items (productId, qty)
- **Order:** userId, items, total, timestamps

### Key Endpoints
- `/api/auth/register` - Register new user
- `/api/auth/login` - Login and receive JWT
- `/api/products/` - Get all products
- `/api/products/:id` - Get product by ID
- `/api/cart/:userId` - Get user's cart
- `/api/cart/add/:productId` - Add product to cart
- `/api/cart/update/:productId` - Update quantity
- `/api/cart/delete/:productId` - Remove from cart
- `/api/order/checkout` - Place order

---

## Frontend Overview
- **React SPA** with routing (React Router)
- **Pages:**
  - AuthPage: Login/Register
  - HomePage: Product listing
  - ProductPage: Product details
  - CartPage: View and manage cart
- **State management:** useState, useEffect, localStorage for JWT
- **API calls:** via Axios service layer
- **Styling:** Tailwind CSS, DaisyUI

---

## Setup & Installation

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/ecommerce_mern.git
cd ecommerce_mern
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create a .env file with:
# MONGODB_URI=<your-mongodb-uri>
# JWT_SECRET=<your-jwt-secret>
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Open the app
- Frontend: http://localhost:5173
- Backend API: http://localhost:5001

---

## API Endpoints
See [Backend Overview](#backend-overview) for main endpoints. All endpoints return JSON.

---

## Screenshots
Add screenshots of the UI here (e.g. Home, Product, Cart, Auth pages).

---

## License
This project is licensed under the ISC License.
