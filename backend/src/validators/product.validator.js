import { body } from "express-validator";

export const createProductValidator = [
  body("name")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Product name is required"),

  body("price")
    .isFloat({ gt: 0 })
    .withMessage("Price must be greater than 0"),

  body("category")
    .notEmpty()
    .withMessage("Category is required"),

  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Stock must be 0 or more")
];
export const updateProductValidator = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("Product name cannot be empty"),
    body("price")
      .optional()
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
    body("category")
      .optional()
      .notEmpty()
      .withMessage("Category cannot be empty"),
    body("stock")
      .optional()
      .isInt({ min: 0 })
      .withMessage("Stock must be 0 or more")
];