/*
Routes.js
*/

//
import express from "express";
//
import {productController} from "../controller/product.js";
//
const router = express.Router();

//
router.route("/product").get(productController.getProducts);
//
router.route("/product/:id").get(productController.getProduct);
//
router.route("/product/add").post(productController.addProduct);
//
router.route("/product/update/:id").patch(productController.updateProduct);
//
router.route("/product/delete/:id").delete(productController.deleteProduct);
//
router.route("/product/deleteAll").delete(productController.deleteProducts);

//
export default router;
