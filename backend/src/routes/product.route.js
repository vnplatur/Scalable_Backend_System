import { Router } from "express";
import authMiddleware from "../middelware/auth.middleware.js"
import roleMiddleware from "../middelware/role.middleware.js";
import validate from "../middelware/validate.middleware.js";
import { createProductValidator, updateProductValidator } from "../validators/product.validator.js";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";
// import productCache from "../middelware/cache.middleware.js";

const router = Router();

// Public routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Admin-only routes
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
    createProductValidator,
    validate,
  createProduct
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateProductValidator,
  validate,
  updateProduct
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteProduct
);

export default router;
