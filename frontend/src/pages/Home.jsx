// Home.jsx

import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      {/* Background Blur Effects */}
      <div className={styles.blur1}></div>
      <div className={styles.blur2}></div>

      <div className={styles.container}>
        {/* Badge */}
        <div className={styles.badge}>
          🚀 Smart Product Dashboard
        </div>

        {/* Hero Heading */}
        <h1>
          Manage Your Products <span>Effortlessly</span>
        </h1>

        {/* Tagline */}
        <p className={styles.tagline}>
          A secure and modern platform to manage products,
          inventory, and users with ease.
        </p>

        {/* Buttons */}
        <div className={styles.buttons}>
          <Link to="/login" className={styles.primary}>
            Login
          </Link>

          <Link to="/register" className={styles.secondary}>
            Register
          </Link>
        </div>

        {/* Feature Cards */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>🔐</div>
            <h3>Secure Authentication</h3>
            <p>
              JWT-based authentication with protected routes
              and user authorization.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>📦</div>
            <h3>Product Management</h3>
            <p>
              Easily add, edit, delete, and organize your
              products efficiently.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>⚡</div>
            <h3>Fast APIs</h3>
            <p>
              Optimized scalable REST APIs for smooth
              application performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;