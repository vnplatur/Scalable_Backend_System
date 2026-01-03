import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import styles from "../styles/dashboard.module.css";
import AddProductForm from "../components/AddProductForm";
import ProductForm from "../components/ProductForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [recentProducts, setRecentProducts] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const fetchSummary = async () => {
    try {
       const res = await api.get("/products");
    setRecentProducts(res.data.data.products.slice(0, 3));
    setTotalProducts(res.data.total || res.data.data.products.length);
    
    setLoading(false);
    } catch (err) {
      console.error("Dashboard summary error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  const handleSuccess = () => {
    
    
    fetchProducts();
  };

  return (
    <div className={styles.container}>
      <h1>Welcome, {user?.name?.split(" ")[0]} 👋</h1>
      <p className={styles.subtitle}>
        Here’s a quick overview of your account
      </p>

      {/* Summary Cards */}
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Total Products</h3>
          <p>{loading ? "..." : totalProducts}</p>
        </div>

        <div className={styles.card}>
          <h3>User Role</h3>
          <p>{user?.role}</p>
        </div>

        <div className={styles.card}>
          <h3>Account Status</h3>
          <p className={styles.active}>Active</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={styles.actions}>
        <h3>Quick Actions</h3>
        <button onClick={() => navigate("/products")}>
          View Products
        </button>

        {user?.role === "admin" && showForm&& (
          <div className={styles.info}>
            {/* <AddProductForm onSuccess={fetchSummary} /> */}
            <ProductForm
                      initialData={null}
                      onSuccess={fetchSummary}
                      onCancel={() => {
                        setShowForm(false);
                      }}/>
          </div>
        )}

      </div>

      {/* Info Section */}
      <div className={styles.info}>
  <h3>Recent Products</h3>

  {recentProducts.length === 0 ? (
    <p>No products added yet.</p>
  ) : (
    <ul className={styles.recentList}>
      {recentProducts.map((p) => (
        <li key={p._id}>
          {p.name} — ₹{p.price}
        </li>
      ))}
    </ul>
  )}
</div>

    </div>
  );
};

export default Dashboard;
