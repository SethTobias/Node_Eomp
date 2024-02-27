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
  adminDeleteUsers
} from "../model/userDatabase.js";

//
const userController = {
  getUser: async (req, res) => {
    const { userProfile, userPass } = req.params.body;
    res.send(await getUser(userProfile, userPass));
  },
  addUser: async (req, res) => {
    const newUser = req.body;
    res.send(await addUser(newUser));
  },
  updateUser: async (req, res) => {
    try{
      const alteredUser = req.body;
      const { userProfile, userPass } = req.params.body;
      res.send(await updateUser(alteredUser, userProfile, userPass));
    }catch(e) {
      res.json({
        status: res.statusCode,
        msg: 'An error occurred'
      })
    }
  },
  deleteUser: async (req, res) => {
    const { userProfile, emailAdd, userPass } = req.params.body;
    res.send(await deleteUser(userProfile, emailAdd, userPass));
  },
  adminGetUsers: async (req, res) => {
    res.send(await adminGetUsers());
  },
  adminGetUser: async (req, res) => {
    const userID = +req.params.id;
    res.send(await adminGetUser(userID));
  },
  adminUpdateUser: async (req, res) => {
    const alteredData = req.body;
    const userID = +req.params.id;
    res.send(await adminUpdateUser(alteredData, userID));
  },
  adminDeleteUser: async (req, res) => {
    const { userID, userProfile } = req.params.body;
    res.send(await adminDeleteUser(userID, userProfile));
  },
  adminDeleteUsers: async (req, res) => {
    res.send(await adminDeleteUsers());
  },
};

export {userController};
