/*
Routes.js
*/

//
import express from "express";
//
import {userController} from "../controller/user.js";
//
const router = express.Router();

//
router.route("/userUser/:name").get(userController.getUser);
//
router.route("/user/addUser").post(userController.addUser);
//
router.route("/user/updateUser/:name").patch(userController.updateUser);
//
router.route("/user/deleteUser/:id").delete(userController.deleteUser);
//
router.route("/user").get(userController.adminGetUsers)
//
router.route("/user/:id").get(userController.adminGetUser);
//
router.route("/user/update/:id").patch(userController.adminUpdateUser);
//
router.route("/user/delete/:id").delete(userController.adminDeleteUser);
//
router.route("/user/deleteAll").delete(userController.adminDeleteUsers);

//
export default router;
