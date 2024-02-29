/*
 ~~ Model ~~
Contains the logical operations between the Database and Node.js:
Specifically the User Table
*/

// Importing necessary functions and modules
import { config } from "dotenv";
config();
import { pool } from "../config/config.js";

/*
    -- User Functions --
*/

/*
    Get/Retrieval Queries
*/
// Function to retrieve a single user by userProfile
const getUser = async (userProfile, userPass) => {
  const [singleUser] = await pool.query(
    `
    SELECT * FROM userTable WHERE userProfile = ?
    `,
    [userProfile]
  );
  return singleUser;
};

/*
    Add Queries
*/
// Function to add a new user to the database
const addUser = async (
  firstName,
  lastName,
  userAge,
  gender,
  emailAdd,
  userPass,
  userProfile
) => {
  const [newUser] = await pool.query(
    `
    INSERT INTO userTable (firstName, lastName, userAge, gender, emailAdd, userPass, userProfile) VALUES (?,?,?,?,?,?,?) 
    `,
    [firstName, lastName, userAge, gender, emailAdd, userPass, userProfile]
  );
  return newUser.insertId;
};

/*
    Edit/Update Queries
*/
// Function to update user information
const updateUser = async (
  firstName,
  lastName,
  userAge,
  gender,
  userRole,
  emailAdd,
  userNewProfile,
  userNewPass,
  userProfile,
  userPass
) => {
  const [alteredUser] = await pool.query(
    ` 
    UPDATE userTable SET firstName=?, lastName=?, userAge=?, gender=?, userRole=?, emailAdd=?, userProfile=?, userPass=? WHERE (userProfile = ?) AND (userPass = ?) 
    `,
    [
      firstName,
      lastName,
      userAge,
      gender,
      userRole,
      emailAdd,
      userNewProfile,
      userNewPass,
      userProfile,
      userPass,
    ]
  );
  return alteredUser;
};

/*
    Delete Queries
*/
// Function to delete a user
const deleteUser = async (userProfile, emailAdd, userPass) => {
  const [[deletedUser]] = await pool.query(
    `
    SELECT userID, userProfile, emailAdd FROM userTable WHERE (userProfile = ?) AND (emailAdd = ?) AND (userPass = ?)
    `,
    [userProfile, emailAdd, userPass]
  );

  await pool.query(
    `
    DELETE FROM userTable WHERE (userProfile = ?) AND (emailAdd = ?) AND (userPass = ?)
    `,
    [userProfile, emailAdd, userPass]
  );
  return deletedUser;
};

/*
    -- Admin Functions --
*/

/*
    Get/Retrieval Queries
*/
// Function to retrieve all users (admin)
const adminGetUsers = async () => {
  const [allUsers] = await pool.query(`
    SELECT * FROM userTable
    `);
  return allUsers;
};

// Function to retrieve a single user by userID (admin)
const adminGetUser = async (userID) => {
  const [singleUser] = await pool.query(
    `
    SELECT * FROM userTable WHERE userID = ?
    `,
    [userID]
  );
  return singleUser;
};

/*
    Add Queries
*/

/*
    Edit/Update Queries
*/
// Function to update a user by userID (admin)
const adminUpdateUser = async (
  firstName,
  lastName,
  userAge,
  gender,
  userRole,
  emailAdd,
  userProfile,
  userPass,
  userID
) => {
  const [alteredUser] = await pool.query(
    ` 
    UPDATE userTable SET firstName=?, lastName=?, userAge=?, gender=?, userRole=?, emailAdd=?, userProfile=?, userPass=? WHERE (userID=?)
    `,
    [
      firstName,
      lastName,
      userAge,
      gender,
      userRole,
      emailAdd,
      userProfile,
      userPass,
      userID,
    ]
  );
  return alteredUser;
};

/*
    Delete Queries
*/
// Function to delete a user by userID (admin)
const adminDeleteUser = async (userID) => {
  const [deletedUser] = await pool.query(
    `
    SELECT * FROM userTable WHERE (userID = ?)
    `,
    [userID]
  );

  await pool.query(
    `
    DELETE FROM userTable WHERE (userID = ?)
    `,
    [userID]
  );
  return deletedUser;
};

// Function to delete all users (admin)
const adminDeleteUsers = async () => {
  await pool.query(`TRUNCATE userTable`);
  const [allUsers] = await pool.query(`
    SELECT * FROM userTable
    `);
  return allUsers;
};

// Exporting the function expressions for later use in the user.js in the controller
export {
  getUser,
  addUser,
  updateUser,
  deleteUser,
  adminGetUser,
  adminGetUsers,
  adminUpdateUser,
  adminDeleteUser,
  adminDeleteUsers
};
