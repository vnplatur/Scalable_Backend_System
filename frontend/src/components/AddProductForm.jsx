import { useState } from "react";
import api from "../api/axios";
import styles from "../styles/products.module.css";

const AddProductForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/products", form);
      setForm({ name: "", price: "", category: "" });
      onSuccess();
    } catch (err) {
      setError("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Product</h3>

      {error && <p className={styles.error}>{error}</p>}

      <input
        name="name"
        type="text"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="price"
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />

      <input
        name="category"
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        required
      />

      <input
        name="description"
        type="textArea"
        placeholder="description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        name="stock"
        type="number"
        placeholder="stock"
        value={form.stock}
        onChange={handleChange}
        required
      />
        <br/><br/>
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
};

export default AddProductForm;
