import { NavLink, useNavigate } from "react-router-dom";
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
        <NavLink to={token ? "/dashboard" : "/"}>
          ProductManagement
        </NavLink>
      </div>

      <div className={styles.links}>
        {!token ? (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.active : ""
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? styles.active : ""
              }
            >
              Register
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? styles.active : ""
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? styles.active : ""
              }
            >
              Products
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? styles.active : ""
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? styles.active : ""
              }
            >
              Products
            </NavLink>

            <span className={styles.user}>
              Hi, {user?.name?.split(" ")[0]}
            </span>

            <button
              onClick={handleLogout}
              className={styles.logout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;