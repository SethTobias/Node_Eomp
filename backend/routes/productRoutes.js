/*
Routes.js
*/

// Importing necessary modules and functions
import express from "express";
import { productController } from "../controller/product.js";

// Creating an Express Router instance
const router = express.Router();
// Defining routes and associating them with corresponding controller functions
// Route to retrieve all products
router.route("/product").get(productController.getProducts);
// Route to retrieve a specific product by ID
router.route("/product/:id").get(productController.getProduct);
// Route to add a new product
router.route("/product/add").post(productController.addProduct);
// Route to update a product by ID
router.route("/product/update/:id").patch(productController.updateProduct);
// Route to delete a product by ID
router.route("/product/delete/:id").delete(productController.deleteProduct);
// Route to delete all products
router.route("/product/deleteAll").delete(productController.deleteProducts);

// Exporting the router for use in other parts of the application
export default router;
