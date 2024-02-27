//
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

//
const userController = {
  getUser: async (req, res) => {
    try {
      const { userProfile, userPass } = req.params.body;
      const retrievedUser = await getUser(userProfile, userPass);
      res.status(200).json(retrievedUser);
    } catch (e) {
      res.json({
        status: res.status(400),
        msg: "An error ocurred while processing your request. User does not exist.",
      });
    }
  },
  addUser: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        userAge,
        gender,
        emailAdd,
        userPass,
        userProfile,
      } = req.body;
      const newUser = await addUser(
        firstName,
        lastName,
        userAge,
        gender,
        emailAdd,
        userPass,
        userProfile
      );
      res.status(200).json(newUser);
    } catch (e) {
      res.json({
        status: res.status(400),
        msg: "An error ocurred while processing your request. User was not added.",
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const {
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
      } = req.body;
      const alteredUser = await updateUser(
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
      );
      res.send(alteredUser);
    } catch (e) {
      res.json({
        status: res.status(400),
        msg: "An error ocurred while processing your request. User was not altered.",
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { userProfile, emailAdd, userPass } = req.body;
      const deletedUser = await deleteUser(userProfile, emailAdd, userPass);
      res.status(200).json(deletedUser);
    } catch (e) {
      res.json({
        status: res.status(400),
        msg: "An error ocurred while processing your request. User was not deleted.",
      });
    }
  },
  adminGetUsers: async (req, res) => {
    try {
      const allUsers = await adminGetUsers();
      res.status(200).json(allUsers);
    } catch (e) {
      res.json({
        status: res.status(400),
        msg: "An error ocurred while processing your request. Users do not exist.",
      });
    }
  },
  adminGetUser: async (req, res) => {
    try {
      const userID = +req.params.id;
      const retrievedUser = await adminGetUser(userID);
      res.status(200).json(retrievedUser);
    } catch (e) {
      res.json({
        status: res.status(400),
        msg: "An error ocurred while processing your request. User was not retrieved.",
      });
    }
  },
  adminUpdateUser: async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        userAge,
        gender,
        userRole,
        emailAdd,
        userProfile,
        userPass,
      } = req.body;
      const userID = +req.params.id;
      const alteredUser = await adminUpdateUser(
        firstName,
        lastName,
        userAge,
        gender,
        userRole,
        emailAdd,
        userProfile,
        userPass,
        userID
      );
      res.status(200).json(alteredUser);
    } catch (e) {
      res.json({
        status: res.status(400),
        msg: "An error ocurred while processing your request. User was not altered.",
      });
    }
  },
  adminDeleteUser: async (req, res) => {
    try {
      const { userID} = +req.params.body;
      const deletedUser = await adminDeleteUser(userID);
      res.status(200).json(deletedUser);
    } catch (e) {
      res.json({
        status: res.status(400),
        msg: "An error ocurred while processing your request. User was not deleted.",
      });
    }
  },
  adminDeleteUsers: async (req, res) => {
    try {
      const deletedUsers = await adminDeleteUsers();
      res.status(200).json(deletedUsers);
    } catch (e) {
      res.json({
        status: res.status(400),
        msg: "An error ocurred while processing your request. Users were not deleted.",
      });
    }
  },
};

export { userController };
