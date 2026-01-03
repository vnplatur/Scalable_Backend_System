# 🚀 Scalable E-Commerce Backend API

A scalable and secure backend system built using **Node.js, Express, MongoDB**, featuring **JWT authentication, role-based authorization, product CRUD APIs, caching, logging, and Swagger documentation**.

This project was developed as part of a **Backend Developer Intern assignment**, focusing on **clean architecture, security, and scalability**.

---

## 📌 Features

### 🔐 Authentication & Authorization
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Role-based access control (User / Admin)

### 🛒 Product Management
- Create, Read, Update, Delete products
- Admin-only access for create/update/delete
- Pagination, search, filtering, and sorting

### ⚡ Performance & Scalability
- Redis caching for product listing APIs
- Cache invalidation on product create/update/delete
- MongoDB indexes for optimized queries

### 📑 API Documentation
- Swagger (OpenAPI 3.0)
- JWT authentication supported inside Swagger UI

### 📊 Logging & Error Handling
- Centralized logging using Winston
- HTTP request logging using Morgan
- Global error-handling middleware

---

## 🏗 Project Structure

backend/
│── src/
│ │── config/
│ │ ├── db.js
│ │ ├── dotenv.js
│ │ ├── redis.js
│ │ └── swagger.js
│ │
│ │── models/
│ │ ├── user.model.js
│ │ └── product.model.js
│ │
│ │── controllers/
│ │ ├── auth.controller.js
│ │ └── product.controller.js
│ │
│ │── services/
│ │ ├── auth.service.js
│ │ └── product.service.js
│ │
│ │── middleware/
│ │ ├── auth.middleware.js
│ │ ├── role.middleware.js
│ │ ├── cache.middleware.js
│ │ ├── error.middleware.js
│ │ └── logger.middleware.js
│ │
│ │── routes/
│ │ ├── auth.routes.js
│ │ └── product.routes.js
│ │
│ │── utils/
│ │ ├── jwt.utils.js
│ │ ├── logger.js
│ │ └── response.js
│ │
│ │── docs/
│ │ └── swagger.json
│ │
│ │── app.js
│ └── server.js
│
│── logs/
│── .env
│── package.json
│── README.md


---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT, bcrypt
- **Logging:** Winston, Morgan
- **Validation:** express-validator
- **Documentation:** Swagger (OpenAPI 3.0)

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=1d
ADMIN_EMAIL=admin@test.com



### 🚀 Getting Started
1. Install Dependencies
npm install

2. Run the Server
npm run dev


Server will start at:

http://localhost:5000

📘 Swagger API Documentation

Swagger UI is available at:

http://localhost:5000/api-docs

🔑 Authorization in Swagger

Login to get JWT token

Click Authorize

Enter:

Bearer <your_jwt_token>

=> API Query Examples
Pagination
GET /api/products?page=1&limit=10

Search
GET /api/products?keyword=iphone

Filtering
GET /api/products?category=electronics&minPrice=500

Sorting
GET /api/products?sortBy=price&order=asc

=> Scalability Notes

Pagination prevents large data loads

Redis caching reduces database read pressure

Cache invalidation ensures data consistency

Modular folder structure supports easy scaling

Ready for microservices or load-balanced systems

=> Security Practices

Password hashing using bcrypt

JWT authentication with expiration

Role-based authorization

Input validation and sanitization

Centralized error handling

=> Author

Vaijeenath Panchakshari
Backend Developer | Node.js | MongoDB | REST APIs
