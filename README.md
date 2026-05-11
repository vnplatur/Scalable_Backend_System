🚀 Scalable E-Commerce Product Management System

A full-stack web application built as part of a Backend Developer Internship Assignment, demonstrating secure authentication, role-based access control, scalable REST APIs, and a clean React frontend.

📌 Project Overview

This project implements a scalable REST API with authentication & authorization, along with a simple, user-friendly frontend UI to interact with the APIs.

The application supports:

User registration & login

JWT-based authentication

Role-based access (User / Admin)

Product CRUD operations

Pagination & search

Dashboard with real-time data

🧱 Tech Stack
🔙 Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcrypt

Express-Validator

Swagger API Documentation

🎨 Frontend

React.js (Vite)

React Router DOM

Axios

CSS Modules

JWT-based Auth Handling

📁 Project Structure
project-root/
│
├── backend/
│   ├── src/
│   ├── README.md
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── README.md
│   └── package.json
│
├── package.json        # Root scripts (run both apps)
└── README.md           # Main project documentation

### Features Implemented
## Authentication & Authorization

User Registration & Login

Password hashing with bcrypt

JWT token authentication

Role-based access (Admin / User)

## Product Management

Create, Read, Update, Delete products

Admin-only product modification

User-only product viewing

Pagination & search for scalability

## Dashboard

Personalized welcome message

Product summary cards

Recent product activity

Admin quick actions

## Frontend UI

Clean and responsive layout

Conditional navbar rendering

Protected routes

User-friendly forms & feedback

### Running the Project Locally
## Prerequisites

Node.js (v18+ recommended)

MongoDB (local or Atlas)

## One-Command Startup (Recommended)

From the root directory:

npm install
npm run dev


This will:

Start backend on http://localhost:5000

Start frontend on http://localhost:5173

## Manual Startup (Optional)
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev

## Environment Variables
Backend (backend/.env)
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
JWT_EXPIRE=1d
ADMIN_EMAIL=admin@test.com

Frontend (frontend/.env)
VITE_API_BASE_URL=http://localhost:5000/api/

## API Documentation

Swagger UI available at:

http://localhost:5000/api-docs


Includes:

Auth APIs

Product APIs

Request/Response schemas
## Security Practices

Password hashing using bcrypt

JWT token validation middleware

Role-based route protection

Input validation & sanitization

Centralized error handling

## Scalability Notes

Modular backend architecture

API versioning (/api/v1)

Pagination & filtering to handle large datasets

Easy to extend into microservices

Redis & Docker planned (not implemented as per scope)


## Not Implemented

Docker

Redis caching

Payment gateway

CI/CD pipelines

(Excluded intentionally to meet assignment scope)

👨‍💻 Author

Vaijeenath Panchakshari
Backend Developer Intern Candidate