import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/layout.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to={token ? "/dashboard" : "/"}>ProductManagement</Link>
      </div>

      <div className={styles.links}>
        {!token ? (
          <> 
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/products">Products</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/products">Products</Link>
            
            <span className={styles.user}>
              Hi, {user?.name?.split(" ")[0]}
            </span>

            <button onClick={handleLogout} className={styles.logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;