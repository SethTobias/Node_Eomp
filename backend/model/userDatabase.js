/*
 ~~ Model ~~
Contains the logical operations between the Database and Node.js:
Specifically the User Table
*/

// userID
// firstName
// lastName
// userAge
// gender
// userRole
// emailAdd
// userPass
// userProfile

//
import { config } from "dotenv";
//
config();
//
import { pool } from "../config/config.js";

/*
                                                        --User Functions--
*/

/*
Get/Retrieval Queries
*/
//
const getUser = async (userProfile, userPass) => {
  // Setting a variable to save the result of the prepared statement
  const [singleUser] = await pool.query(
    `
    SELECT * FROM userTable WHERE userProfile = ? AND userPass = ?
    `,
    [userProfile, userPass]
  ); // Prepared Statement: retrieves a single user by its ID
  return singleUser;
};
/*
Add Queries
*/
// Adding a new user to the table of the mysql database
const addUser = async (
  firstName,
  lastName,
  userAge,
  gender,
  emailAdd,
  userPass,
  userProfile
) => {
  //
  const [newUser] = await pool.query(
    // (  )  (?)
    `
    INSERT INTO userTable (firstName,lastName,userAge,gender,emailAdd,userPass,userProfile) VALUES (?,?,?,?,?,?,?) 
    `,
    [firstName, lastName, userAge, gender, emailAdd, userPass, userProfile] //
  ); // Prepared Statement:
  //
  return newUser.insertId;
};
/*
Edit/Update Queries
*/
// Adding a
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
  //
  const [alteredUser] = await pool.query(
    ` 
    UPDATE userTable SET firstName=?,lastName=?,userAge=?,gender=?,emailAdd=?,userProfile=?,userPass=? WHERE (userProfile = ?) AND (userPass = ?) 
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
  ); //
  return alteredUser;
};
/*
Delete Queries
*/
// Removing a user from the table of the mysql database
const deleteUser = async (userProfile, emailAdd, userPass) => {
  //
  const [[deletedUser]] = await pool.query(
    `
    SELECT userID,userProfile,emailAdd FROM userTable WHERE (userProfile = ?) AND (emailAdd = ?) AND (userPass = ?)
    `,
    [userProfile, emailAdd, userPass]
  ); // Prepared Statement:

  //
  await pool.query(
    `
    DELETE FROM userTable WHERE (userProfile = ?) AND (emailAdd = ?) AND (userPass = ?)
    `,
    [userProfile, emailAdd, userPass]
  ); // Prepared Statement:
  return deletedUser;
};

/*
                                                        --Admin Functions--
*/

/*
Get/Retrieval Queries
*/
// Retrieving all the data from the user table in mysql database
const adminGetUsers = async () => {
  // Setting a variable to save the result of the prepared statement
  const [allUsers] = await pool.query(`
    SELECT * FROM userTable
    `); // Prepared Statement: retrieves all users
  return allUsers;
};
// Retrieving a single record by its id from the user table in mysql database
const adminGetUser = async (userID) => {
  // Setting a variable to save the result of the prepared statement
  const [singleUser] = await pool.query(
    `
    SELECT * FROM userTable WHERE userID = ?
    `,
    [userID]
  ); // Prepared Statement: retrieves a single user by its ID
  return singleUser;
};
/*
Add Queries
*/

/*
Edit/Update Queries
*/
//
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
  //
  const [alteredUser] = await pool.query(
    ` 
    UPDATE userTable SET firstName=?,lastName=?,userAge=?,gender=?,userRole=?,emailAdd=?,userProfile=?,userPass=? WHERE (userID=?)
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
  ); //
  return alteredUser;
};
/*
Delete Queries
*/
// Removing a user from the table of the mysql database
const adminDeleteUser = async (userID) => {
  //
  const [deletedUser] = await pool.query(
    `
    SELECT * FROM userTable WHERE (userID = ?)
    `,
    [userID]
  ); // Prepared Statement:

  //
  await pool.query(
    `
    DELETE FROM userTable WHERE (userID = ?)
    `,
    [userID]
  ); // Prepared Statement:
  return deletedUser;
};
// Removing all users from the table of the mysql database
const adminDeleteUsers = async () => {
  //
  await pool.query(`TRUNCATE userTable`); // Prepared Statement:
  const [allUsers] = await pool.query(`
  SELECT * FROM userTable
  `); // Prepared Statement: retrieves all users
  return allUsers;
};

// Test code
// console.log(await getUsers());


// Exporting the function expressions for later use in the server.js and/or index.js
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
