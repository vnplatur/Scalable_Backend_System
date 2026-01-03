import { useState, useEffect } from "react";
import api from "../api/axios";
import styles from "../styles/products.module.css";

const ProductForm = ({ initialData, onSuccess, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    stock: ""
  });
  const [ifError,setIfError] = useState(null)

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (initialData) {
        await api.put(`/products/${initialData._id}`, form);
      } else {
        await api.post("/products", form);
      }
      onSuccess();
      setForm({
        name: "",
        price: "",
        category: "",
        description: "",
        stock: ""
      });
      setIfError(null);
    } catch (err) {
        console.log(err);
        if (err.response?.data?.errors) {
            const messages = err.response.data.errors.map(e => e.message);
            setIfError(messages[0]);
            alert(messages[0]);
        }else{
            alert( "Failed to save product" );
        }
    }
  };

  return (
    <>
    {ifError && <p className={styles.warning}>{ifError}</p>}
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        name="name"
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

      <div className={styles.formActions}>
        <button type="submit">
          {initialData ? "Update" : "Create"}
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
    </>
  );
};

export default ProductForm;
