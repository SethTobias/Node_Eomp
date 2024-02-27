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
router.route("/user").get(userController.getUsers);
//
router.route("/user/:name").get(userController.getUser);
//
router.route("/user/add").post(userController.addUser);
//
router.route("/user/update/:name").post(userController.updateUser);
//
router.route("/user/delete/:id").post(userController.deleteUser);
//
router.route("/user/:id").post(userController.getUserAdmin);
//
router.route("/user/update/:id").post(userController.updateUserAdmin);
//
router.route("/user/delete/:id").post(userController.deleteUserAdmin
    );
//
router.route("/user/deleteAll").post(userController.deleteUsersAdmin
    );

//
export default router;
