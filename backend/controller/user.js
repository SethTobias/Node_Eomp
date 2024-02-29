// Importing necessary functions and modules
import {
  getUser,
  addUser,
  updateUser,
  deleteUser,
  adminGetUser,
  adminGetUsers,
  adminUpdateUser,
  adminDeleteUser,
  adminDeleteUsers,
} from "../model/userDatabase.js";
import bcrypt from 'bcrypt';

// Controller functions for user-related operations
const userController = {
  // Function to get a user's information
  getUser: async (req, res) => {
    try {
      // Destructuring user profile and password from request body
      const { userProfile, userPass } = req.body;
      // Comparing entered password with hashed password using bcrypt
      bcrypt.compare(userPass, hash, (e, user) => {
        // Handling any errors during password comparison
        if (e) {
          console.error('Error comparing passwords:', e);
          // Handling the error
        } else {
          if (user) {
            console.log('Passwords match!');
            // The entered password matches the stored hash
          } else {
            console.log('Passwords do not match.');
            // The entered password does not match the stored hash
          }
        }
      });
      // Retrieving user information from the database
      const retrievedUser = await getUser(userProfile, userPass);
      // Sending the user information as JSON response
      res.status(200).json(retrievedUser);
    } catch (e) {
      // Handling errors and sending appropriate response
      res.json({
        status: res.status(400),
        msg: "An error occurred while processing your request. User does not exist.",
      });
    }
  },

  // Function to add a new user
  addUser: async (req, res) => {
    try {
      // Destructuring user details from request body
      const {
        firstName, lastName, userAge, gender, emailAdd, userPass, userProfile,
      } = req.body;
      // Hashing the user's password using bcrypt
      bcrypt.hash(userPass, 10, async (err, hash) => {
        // Handling any errors during password hashing
        if (err) throw err;
        // Adding the new user to the database
        const newUser = await addUser(
          firstName, lastName, userAge, gender, emailAdd, hash, userProfile
        );
        // Sending the new user information as JSON response
        res.status(200).json(newUser);
      });
    } catch (e) {
      // Handling errors and sending appropriate response
      res.json({
        status: res.status(400),
        msg: "An error occurred while processing your request. User was not added.",
      });
    }
  },

  // Function to update a user's information
  updateUser: async (req, res) => {
    try {
      // Destructuring user details from request body
      let {
        firstName, lastName, userAge, gender, userRole, emailAdd,
        userNewProfile, userNewPass, userProfile, userPass,
      } = req.body;
      // Updating the user's information in the database
      const alteredUser = await updateUser(
        firstName, lastName, userAge, gender, userRole, emailAdd,
        userNewProfile, userNewPass, userProfile, userPass
      );
      // Sending the updated user information as response
      res.send(alteredUser);
    } catch (e) {
      // Handling errors and sending appropriate response
      res.json({
        status: res.status(400),
        msg: "An error occurred while processing your request. User was not altered.",
      });
    }
  },

  // Function to delete a user
  deleteUser: async (req, res) => {
    try {
      // Destructuring user details from request body
      const { userProfile, emailAdd, userPass } = req.body;
      // Deleting the user from the database
      const deletedUser = await deleteUser(userProfile, emailAdd, userPass);
      // Sending the deleted user information as JSON response
      res.status(200).json(deletedUser);
    } catch (e) {
      // Handling errors and sending appropriate response
      res.json({
        status: res.status(400),
        msg: "An error occurred while processing your request. User was not deleted.",
      });
    }
  },

  // Admin functions

  // Function to retrieve all users (admin)
  adminGetUsers: async (req, res) => {
    try {
      // Retrieving all users from the database (admin)
      const allUsers = await adminGetUsers();
      // Sending the list of users as JSON response
      res.status(200).json(allUsers);
    } catch (e) {
      // Handling errors and sending appropriate response
      res.json({
        status: res.status(400),
        msg: "An error occurred while processing your request. Users do not exist.",
      });
    }
  },

  // Function to retrieve a user by ID (admin)
  adminGetUser: async (req, res) => {
    try {
      // Extracting user ID from request parameters
      const userID = +req.params.id;
      // Retrieving a specific user by ID (admin)
      const retrievedUser = await adminGetUser(userID);
      // Sending the retrieved user information as JSON response
      res.status(200).json(retrievedUser);
    } catch (e) {
      // Handling errors and sending appropriate response
      res.json({
        status: res.status(400),
        msg: "An error occurred while processing your request. User was not retrieved.",
      });
    }
  },

  // Function to update a user by ID (admin)
  adminUpdateUser: async (req, res) => {
    try {
      // Destructuring user details from request body
      const {
        firstName, lastName, userAge, gender, userRole, emailAdd,
        userProfile, userPass,
      } = req.body;
      // Extracting user ID from request parameters
      const userID = +req.params.id;
      // Updating a specific user by ID (admin)
      const alteredUser = await adminUpdateUser(
        firstName, lastName, userAge, gender, userRole, emailAdd,
        userProfile, userPass, userID
      );
      // Sending the updated user information as response
      res.status(200).json(alteredUser);
    } catch (e) {
      // Handling errors and sending appropriate response
      res.json({
        status: res.status(400),
        msg: "An error occurred while processing your request. User was not altered.",
      });
    }
  },

  // Function to delete a user by ID (admin)
  adminDeleteUser: async (req, res) => {
    try {
      // Extracting user ID from request parameters
      const userID = +req.params.id;
      // Deleting a specific user by ID (admin)
      const deletedUser = await adminDeleteUser(userID);
      // Sending the deleted user information as JSON response
      res.status(200).json(deletedUser);
    } catch (e) {
      // Handling errors and sending appropriate response
      res.json({
        status: res.status(400),
        msg: "An error occurred while processing your request. User was not deleted.",
      });
    }
  },

  // Function to delete all users (admin)
  adminDeleteUsers: async (req, res) => {
    try {
      // Deleting all users from the database (admin)
      const deletedUsers = await adminDeleteUsers();
      // Sending the deleted users information as JSON response
      res.status(200).json(deletedUsers);
    } catch (e) {
      // Handling errors and sending appropriate response
      res.json({
        status: res.status(400),
        msg: "An error occurred while processing your request. Users were not deleted.",
      });
    }
  },
};

// Exporting the userController object for use in other parts of the application
export { userController };