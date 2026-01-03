🖥️ Frontend – E-Commerce Product Management

This is the frontend application for the Scalable REST API with Authentication & Role-Based Access project.
It is built using React.js and connects to the backend APIs for authentication and product management.

🚀 Tech Stack

React.js (Vite / CRA)

React Router DOM – Routing

Axios – API communication

CSS Modules (*.module.css) – Scoped styling

JWT Authentication – Secure API access

📁 Folder Structure
frontend/
│── src/
│   │── components/
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │
│   │── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Products.jsx
│   │
│   │── services/
│   │   ├── auth.service.js
│   │   └── product.service.js
│   │
│   │── context/
│   │   └── AuthContext.jsx
│   │
│   │── styles/
│   │   ├── navbar.module.css
│   │   ├── auth.module.css
│   │   └── dashboard.module.css
│   │
│   │── App.jsx
│   │── main.jsx
│
│── .env
│── package.json

🔐 Authentication Flow

Users can Register & Login

Backend returns a JWT token

Token is stored securely in localStorage

Auth state is managed using React Context

Protected routes are guarded using ProtectedRoute

🧭 UI Pages Overview
🏠 Home Page

Landing page for the application

Shows app introduction and navigation links

🔑 Login Page

User login form

Displays error/success messages

Redirects to dashboard on success

Link to Register page

📝 Register Page

User registration form

Input validation

Redirects to login after successful registration

📊 Dashboard

Visible only after login

Displays:

Logged-in user name

Summary cards (Products count, Recent activity)

Quick navigation to Products page

📦 Products Page

Product listing with:

Pagination

Search functionality

CRUD operations:

Add Product

Edit Product

Delete Product

Role-based UI (Admin-only actions)

🌐 API Integration

All API calls are handled using Axios inside the services/ folder.

Example:

axios.get("/api/products", {
  headers: {
    Authorization: `Bearer ${token}`
  }
});


▶️ Running the Frontend
cd frontend
npm install
npm run dev


Frontend will run on:

http://localhost:5173

🔒 Security Practices

JWT token required for protected routes

Role-based UI rendering

Input validation on forms

Centralized auth handling using context

📌 Notes

Redis and Docker are not implemented (as per project scope)

UI is intentionally kept simple and user-friendly

Focus is on clean structure & real-world flow

👨‍💻 Author

Vaijeenath Panchakshari
Backend & Frontend Developer Intern Assignment