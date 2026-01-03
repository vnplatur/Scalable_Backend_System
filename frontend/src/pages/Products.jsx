import { useEffect, useState } from "react";
import api from "../api/axios";
import styles from "../styles/products.module.css";
import ProductForm from "../components/ProductForm";

const Products = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "admin";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setkeyword] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products", {params: {
        keyword,
        page,
        limit
      }});
      console.log(res.data.data);
      setProducts(res.data.data.products || []);
      console.log(res.data.data.products.length);
      setTotal(res.data.data.products.length);
    } catch (err) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [keyword, page]); 

  
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  const handleSuccess = () => {
    setShowForm(false);
    setEditProduct(null);
    fetchProducts();
  };

  if (loading) return <p className={styles.status}>Loading products...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.container}>
      <h2>Products</h2>

      {isAdmin && (
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <button onClick={() => setShowForm(true)}>
            Add Product
          </button>
          <div className={styles.toolbar}>
            <input
              type="text"
              placeholder="Search products..."
              value={keyword}
              onChange={(e) => {
                setkeyword(e.target.value);
                setPage(1);
              }}
            />
          </div>
        </div>

      )}

      {showForm && (
        <ProductForm
          initialData={editProduct}
          onSuccess={handleSuccess}
          onCancel={() => {
            setShowForm(false);
            setEditProduct(null);
          }}
        />
      )}

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Stock</th>
              {isAdmin && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>₹{product.price}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.stock}</td>
                {isAdmin && (
                <td>
                  <button onClick={() => {
                    setEditProduct(product);
                    setShowForm(true);
                  }}>
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className={styles.delete}
                  >
                    Delete
                  </button>
                </td>
              )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button
        onClick={() => setPage((p) => p + 1)}
        disabled={page * limit > total}>
        Next
      </button>
    </div>
  );
};

export default Products;
