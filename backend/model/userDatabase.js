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
                                                        --Get/Retrieval Queries--
*/

// Retrieving all the data from the user table in mysql database
const getUsers = async () => {
  // Setting a variable to save the result of the prepared statement
  const [allUsers] = await pool.query(`
    SELECT userID,firstName,lastName,userAge,gender,userRole,emailAdd,userProfile FROM userTable
    `); // Prepared Statement: retrieves all users
  return allUsers;
};

// Retrieving a single record by its id from the user table in mysql database
const getUserAdmin = async (userID) => {
  // Setting a variable to save the result of the prepared statement
  const [singleUser] = await pool.query(
    `
    SELECT * FROM userTable WHERE userID = ?
    `,
    [userID]
  ); // Prepared Statement: retrieves a single user by its ID
  return singleUser;
};

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
                                                        --Add Queries--
*/

// Admin

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

// User

//

/*
                                                        --Edit/Update Queries--
*/

// Admin

//
const updateUserAdmin = async (
  firstName,
  lastName,
  userAge,
  gender,
  emailAdd,
  userProfile,
  userPass,
  userID
) => {
  //
  const [alteredUser] = await pool.query(
    ` 
    UPDATE userTable SET firstName=?,lastName=?,userAge=?,gender=?,emailAdd=?,userProfile=?,userPass=? WHERE (userID=?)
    `,
    [
      firstName,
      lastName,
      userAge,
      gender,
      emailAdd,
      userProfile,
      userPass,
      userID,
    ]
  ); //
  return alteredUser;
};

// User

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
                                                        --Delete Queries--
*/

// Admin Functions
// Removing all users from the table of the mysql database
const deleteUsersAdmin = async () => {
  //
  await pool.query(`TRUNCATE userTable`); // Prepared Statement:
  const [allUsers] = await pool.query(`
  SELECT userID,firstName,lastName,userAge,gender,emailAdd,userProfile FROM userTable
  `); // Prepared Statement: retrieves all users
  return allUsers;
};

// Removing a user from the table of the mysql database
const deleteUserAdmin = async (userID, userProfile) => {
  //
  const [deletedUser] = await pool.query(
    `
    SELECT userID,firstName,lastName,userAge,gender,emailAdd,userProfile FROM userTable WHERE (userID = ?) AND (userProfile = ?)
    `,
    [userID, userProfile]
  ); // Prepared Statement:

  //
  await pool.query(
    `
    DELETE FROM userTable WHERE (userID = ?) AND  (userProfile = ?)
    `,
    [userID, userProfile]
  ); // Prepared Statement:
  return deletedUser;
};

// User Functions
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

// Test code
// console.log(await getUsers());
// console.log(await getUserAdmin("4"));
// console.log(await getUser('Rain','1234'));
// console.log(await updateUserAdmin('Mark','24','1'));
// console.log(await updateUser('New','Apple','30','Female','seth@add','Rain','1234','789','Rain'));
// console.log(await deleteUsersAdmin())
// console.log(await deleteUser('Rin','email@add','1234'))
// console.log(await deleteUserAdmin('1','Rain'))
// console.log(await addUser('Seth','Tobias',20,'Male','email@add','1234','Rin'));
// console.log(await addUser('Seth','Tobias',20,'Male','email@add','1234','Rain'));
// console.log(await getUsers());

// firstName,lastName,userAge,gender,emailAdd,userPass,userProfile

// Exporting the function expressions for later use in the server.js and/or index.js
export {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  getUserAdmin,
  updateUserAdmin,
  deleteUserAdmin,
  deleteUsersAdmin,
};
