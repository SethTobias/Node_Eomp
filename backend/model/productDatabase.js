/*
 ~~ Model ~~
Contains the logical operations between the Database and Node.js:
Specifically the Product Table
*/

// prodID
// prodName
// quantity
// amount
// category
// prodUrl

//
import { config } from "dotenv";
//
config();
//
import { pool } from "../config/config.js";

/*
                                                        --Get/Retrieval Queries--
*/

// Retrieving all the data from the Products table in mysql database
const getProducts = async () => {
  // Setting a variable to save the result of the prepared statement
  const [allProducts] = await pool.query(`
    SELECT * FROM productTable
    `); // Prepared Statement: retrieves all Products
  return allProducts;
};

// Retrieving a single record by its id from the Products table in mysql database
const getProduct = async (prodID) => {
  // Setting a variable to save the result of the prepared statement
  const [singleProduct] = await pool.query(
    `
    SELECT  * FROM productTable WHERE prodID = ?
    `,
    [prodID]
  ); // Prepared Statement: retrieves a single Products by its ID
  return singleProduct;
};

//

/*
                                                        --Add Queries--
*/

// Admin

// Adding a new Products to the table of the mysql database
const addProduct = async (prodName, quantity, amount, category, prodUrl) => {
  //
  const [newProduct] = await pool.query(
    // (  )  (?)
    `
    INSERT INTO productTable (
        prodName,
        quantity,
        amount,
        category,
        prodUrl) VALUES (?,?,?,?,?) 
    `,
    [prodName, quantity, amount, category, prodUrl] //
  ); // Prepared Statement:
  //
  return newProduct.insertId;
};

/*
                                                        --Edit/Update Queries--
*/

// Admin

//
const updateProduct = async (
  prodName,
  quantity,
  amount,
  category,
  prodUrl,
  prodID
) => {
  //
  const [alteredProduct] = await pool.query(
    ` 
    UPDATE productTable SET prodName=?,quantity=?,amount=?,category=?,prodUrl=? WHERE (prodID=?)
    `,
    [prodName, quantity, amount, category, prodUrl, prodID]
  ); //
  return alteredProduct;
};

/*
                                                        --Delete Queries--
*/

// Admin Functions

// Removing a Products from the table of the mysql database
const deleteProduct = async (prodID) => {
  //
  const [deletedProduct] = await pool.query(
    `
    SELECT * FROM productTable WHERE (prodID = ?)
    `,
    [prodID]
  ); // Prepared Statement:

  //
  await pool.query(
    `
    DELETE FROM productTable WHERE (prodID = ?)
    `,
    [prodID]
  ); // Prepared Statement:
  return deletedProduct;
};

// Removing all Products from the table of the mysql database
const deleteProducts = async () => {
  await pool.query(`TRUNCATE productTable`); // Prepared Statement:
  //
  const [allProducts] = await pool.query(`
    SELECT prodName,
    quantity,
    amount,
    category,
    prodUrl, prodID FROM productTable
    `); // Prepared Statement: retrieves all Products
  return allProducts;
};

// Test code
// console.log(await getProducts());
// console.log(await getProduct('1'));

// Exporting the function expressions for later use in the server.js and/or index.js
export {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  deleteProducts,
};
