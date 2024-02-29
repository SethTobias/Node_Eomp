/*

*/

// Importing functions from the productDatabase module for CRUD operations
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  deleteProducts
} from "../model/productDatabase.js";

// Controller object for handling product-related operations
const productController = {
  // Get all products
  getProducts: async (req, res) => {
    try {
      // Retrieve all products from the database
      const allProducts = await getProducts();
      // Respond with the retrieved products in JSON format
      res.status(200).json(allProducts);
    } catch (e) {
      // Handle errors and respond with an appropriate message
      res.json({
        status: res.status(404),
        msg: 'An error occurred when processing your request. No products found.'
      });
    }
  },

  // Get a specific product by ID
  getProduct: async (req, res) => {
    try {
      // Extract product ID from request parameters
      const productID = +req.params.id;
      // Retrieve the product with the specified ID from the database
      const retrievedProduct = await getProduct(productID);
      // Respond with the retrieved product in JSON format
      res.status(200).json(retrievedProduct);
    } catch (e) {
      // Handle errors and respond with an appropriate message
      res.json({
        status: res.status(404),
        msg: 'An error occurred when processing your request. No such product exists.'
      });
    }
  },

  // Add a new product
  addProduct: async (req, res) => {
    try {
      // Extract product details from the request body
      const { prodName, quantity, amount, category, prodUrl } = req.body;
      // Add the new product to the database
      const newProduct = await addProduct(prodName, quantity, amount, category, prodUrl);
      // Respond with the ID of the newly added product in JSON format
      res.status(201).json(newProduct);
    } catch (e) {
      // Handle errors and respond with an appropriate message
      res.json({
        status: res.status(400),
        msg: 'An error occurred when processing your request. Product was not added.'
      });
    }
  },

  // Update an existing product
  updateProduct: async (req, res) => {
    try {
      // Extract product details and ID from the request body and parameters
      const productID = +req.params.id;
      const [product] = await getProduct(productID)
      console.log(product)
      let { prodName, quantity, amount, category, prodUrl } =req.body;
      prodName ? prodName=prodName: {prodName}=product
      console.log(product)
      quantity ? quantity= quantity: {quantity}=product
      amount ? amount= amount: {amount}=product
      category ? category= category: {category}=product
      prodUrl ? prodUrl= prodUrl: {prodUrl}=product
      // Update the existing product in the database
      const alteredProduct = await updateProduct(prodName, quantity, amount, category, prodUrl, productID);
      // Respond with the updated product in JSON format
      res.status(200).json(alteredProduct);
    } catch (e) {
      // Handle errors and respond with an appropriate message
      res.json({
        status: res.status(200),
        msg: 'An error occurred when processing your request. Product was not altered.'
      });
    }
  },

  // Delete a specific product by ID
  deleteProduct: async (req, res) => {
    try {
      // Extract product ID from request parameters
      const productID = +req.params.id;
      // Retrieve information about the product before deletion
      const deletedProduct = await deleteProduct(productID);
      // Delete the product from the database
      await deleteProduct(productID);
      // Respond with the information about the deleted product in JSON format
      res.status(200).json(deletedProduct);
    } catch (e) {
      // Handle errors and respond with an appropriate message
      res.json({
        status: res.status(4000),
        msg: 'An error occurred when processing your request. Product was not deleted.'
      });
    }
  },

  // Delete all products
  deleteProducts: async (req, res) => {
    try {
      // Delete all products from the database
      const deletedProducts = await deleteProducts();
      // Respond with the information about the deleted products in JSON format
      res.status(200).json(deletedProducts);
    } catch (e) {
      // Handle errors and respond with an appropriate message
      res.json({
        status: res.status(400),
        msg: 'An error occurred when processing your request. Products could not be deleted.'
      });
    }
  }
};

// Export the productController object for use in other parts of the application
export { productController };
