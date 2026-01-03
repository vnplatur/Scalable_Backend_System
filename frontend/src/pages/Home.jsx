import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Product Management</h1>
      <p className={styles.tagline}>
        Simple & Secure Product Management System
      </p>

      <div className={styles.buttons}>
        <Link to="/login" className={styles.primary}>
          Login
        </Link>
        <Link to="/register" className={styles.secondary}>
          Register
        </Link>
      </div>

      <div className={styles.features}>
        <p>✔ Secure Authentication</p>
        <p>✔ Admin Product Management</p>
        <p>✔ Scalable REST APIs</p>
      </div>
    </div>
  );
};

export default Home;
