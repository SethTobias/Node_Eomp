/*
 ~~ Model ~~
Contains the logical operations between the Database and Node.js:
Specifically the Product Table
*/

// Load environment variables from the '.env' file into process.env
import { config } from "dotenv";
config();

// Importing the MySQL connection pool from the 'config' module
import { pool } from "../config/config.js";

/*
  --Get/Retrieval Queries--
*/

// Retrieve all products from the productTable in the MySQL database
const getProducts = async () => {
  // Execute a SELECT query to retrieve all products
  const [allProducts] = await pool.query(`
    SELECT * FROM productTable
  `);
  // Return the result of the query
  return allProducts;
};

// Retrieve a single product by its ID from the productTable in the MySQL database
const getProduct = async (prodID) => {
  // Execute a SELECT query to retrieve a single product by its ID
  const [singleProduct] = await pool.query(`
    SELECT * FROM productTable WHERE prodID = ?
  `, [prodID]);
  // Return the result of the query
  return singleProduct;
};

/*
  --Add Queries--
*/

// Admin

// Add a new product to the productTable in the MySQL database
const addProduct = async (prodName, quantity, amount, category, prodUrl) => {
  // Execute an INSERT query to add a new product
  const [newProduct] = await pool.query(`
    INSERT INTO productTable (
      prodName,
      quantity,
      amount,
      category,
      prodUrl) VALUES (?,?,?,?,?) 
  `, [prodName, quantity, amount, category, prodUrl]);
  // Return the ID of the newly added product
  return newProduct.insertId;
};

/*
  --Edit/Update Queries--
*/

// Admin

// Update an existing product in the productTable in the MySQL database
const updateProduct = async (
  prodName,
  quantity,
  amount,
  category,
  prodUrl,
  prodID
) => {
  // Execute an UPDATE query to modify an existing product
  const [alteredProduct] = await pool.query(`
    UPDATE productTable SET prodName=?,quantity=?,amount=?,category=?,prodUrl=? WHERE (prodID=?)
  `, [prodName, quantity, amount, category, prodUrl, prodID]);
  // Return the result of the query
  return alteredProduct;
};

/*
  --Delete Queries--
*/

// Admin Functions

// Remove a product from the productTable in the MySQL database
const deleteProduct = async (prodID) => {
  // Execute a SELECT query to retrieve information about the product before deletion
  const [deletedProduct] = await pool.query(`
    SELECT * FROM productTable WHERE (prodID = ?)
  `, [prodID]);
  // Execute a DELETE query to remove the product
  await pool.query(`
    DELETE FROM productTable WHERE (prodID = ?)
  `, [prodID]);
  // Return the information about the deleted product
  return deletedProduct;
};

// Remove all products from the productTable in the MySQL database
const deleteProducts = async () => {
  // Execute a TRUNCATE query to delete all records from the productTable
  await pool.query(`TRUNCATE productTable`);
  // Execute a SELECT query to retrieve information about all products after deletion
  const [allProducts] = await pool.query(`
    SELECT prodName,
    quantity,
    amount,
    category,
    prodUrl, prodID FROM productTable
  `);
  // Return the information about all products
  return allProducts;
};

// Test code
// console.log(await getProducts());
// console.log(await getProduct('1'));

// Export function expressions for later use in our product.js controller
export {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  deleteProducts,
};