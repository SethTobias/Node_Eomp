//
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  getUserAdmin,
  updateUserAdmin,
  deleteUserAdmin,
  deleteUsersAdmin,
} from "../model/userDatabase.js";

//
const userController = {
  getUsers: async (req, res) => {
    try {
      res.send(await getUsers());
    }catch(e) {
      res.json({
        status: res.statusCode,
        msg: "An error ocurred when retrieving the data."
      })
    }
  },
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
  getUserAdmin: async (req, res) => {
    const userID = +req.params.id;
    res.send(await getUserAdmin(userID));
  },
  updateUserAdmin: async (req, res) => {
    const alteredData = req.body;
    const userID = +req.params.id;
    res.send(await updateUserAdmin(alteredData, userID));
  },
  deleteUserAdmin: async (req, res) => {
    const { userID, userProfile } = req.params.body;
    res.send(await deleteUserAdmin(userID, userProfile));
  },
  deleteUsersAdmin: async (req, res) => {
    res.send(await deleteUsersAdmin());
  },
};

export {userController};
