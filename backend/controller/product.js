/*

*/

// 
import {getProducts,getProduct,addProduct,updateProduct,deleteProduct,deleteProducts} from "../model/productDatabase.js";

// 
const productController =  {
  // 
    getProducts: async (req, res) => {
      // 
      try {
        const allProducts = await getProducts() //
        res.status(200).json(allProducts); //
      } catch (e) { //
        res.json({
          status: res.status(404),
          msg: 'An error ocurred when processing your request.No users found.'
        }) //
      }
      },
    // 
    getProduct: async (req, res) => {
      //
        try {
          const productID = +req.params.id //
          const retrievedProduct = await getProduct(productID)//
          res.status(200).json(retrievedProduct); // 
        } catch (e) { //
          res.json({
            status: res.status(404),
            msg: 'An error ocurred when processing your request. No such user exists'
          }) //
        }
      },
      //
    addProduct: async (req, res) => {
      //
      try {
        const {prodName, quantity, amount, category, prodUrl} = req.body //
        const newProduct = await addProduct(prodName, quantity, amount, category, prodUrl); //
        res.status(201).json(newProduct); //
      } catch (e) { //
        res.json({
          status: res.status(400),
          msg: 'An error ocurred when processing your request. User was not added.'
        }) //
      }
      },
      //
    updateProduct: async (req, res) => {
      try {
        const {prodName, quantity, amount, category, prodUrl} = req.body //
        const productID = req.params.id //
        const alteredProduct = await updateProduct(prodName, quantity, amount, category, prodUrl, productID)//
        res.status(200).json(alteredProduct); //
      } catch (e) { //
        res.json({
          status: res.status(200),
          msg: 'An error ocurred when processing your request. User was not altered.'
        }) //
      }
      },
      //
    deleteProduct: async (req, res) => {
      //
      try {
        const productID = +req.params.id //
        const deletedProduct = await deleteProduct(productID) //
        res.status(200).json(deletedProduct); //
      } catch (e) { //
        res.json({
          status: res.status(4000),
          msg: 'An error ocurred when processing your request. Product was not deleted.'
        }) //
      }
      },
      //
    deleteProducts: async (req, res) => {
      //
      try {
        const deletedProducts = await deleteProducts() //
        res.status(200).json(deletedProducts) //
      } catch (e) { //
        res.json({
          status: res.status(400),
          msg: 'An error ocurred when processing your request. Products could not be deleted.'
        }) //
      }
      }
}

// 
export {productController};