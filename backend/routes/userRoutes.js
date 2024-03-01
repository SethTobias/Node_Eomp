/*
Routes.js
*/

// Importing the 'express' framework for creating web applications
import express from "express";

// Importing the 'userController' from the 'user.js' file in the 'controller' directory
import { userController } from "../controller/user.js";

// Creating an instance of the Express Router
const router = express.Router();

// Define routes for user-related operations

// Route for user login
router.route("/user/login").get(userController.getUser);

// Route for adding a new user
router.route("/user/add").post(userController.addUser);

// Route for updating a user by name
router.route("/user/updateUser/:name").patch(userController.updateUser);

// Route for deleting a user by ID
router.route("/user/deleteUser/:id").delete(userController.deleteUser);

// Admin Routes

// Route for retrieving all users (admin)
router.route("/user").get(userController.adminGetUsers);

// Route for retrieving a user by ID (admin)
router.route("/user/:id").get(userController.adminGetUser);

// Route for updating a user by ID (admin)
router.route("/user/update/:id").patch(userController.adminUpdateUser);

// Route for deleting a user by ID (admin)
router.route("/user/delete/:id").delete(userController.adminDeleteUser);

// Route for deleting all users (admin)
router.route("/user/deleteAll").delete(userController.adminDeleteUsers);

// Export the router for use in other parts of the application
export default router;
