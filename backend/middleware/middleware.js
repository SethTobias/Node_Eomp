// Implementation to still take place
//_______________________________________________________________________

// import express from "express";
// import { config } from "dotenv";
// config();
// import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";
// import { getUser } from "../model/userDatabase";


const middleware = {
// Function authentication of jsonwebtoken: verification of user by referencing the cookie that was stored when the user originally signed in.  
  // authenticate: (req, res, next) => {
  //   let { cookie } = req.headers;
  //   let tokenInHeader = cookie && cookie.split("=")[1];
  //   console.log(cookie, tokenInHeader);
  //   if (token === null) {
  //     return res.sendStatus(401);
  //   }
  //   jwt.verify(tokenInHeader, process.env.SECRET_KEY, (err, user) => {
  //     if (err) {
  //       return res.sendStatus(403);
  //     }
  //     req.user = user;
  //     next();
  //   });
  // },

// Function authentication of user: Function to set a jsonwebtoken and also save a cookie when the user logs in this is done by comparing the hashed password in the database and the password entered by the user.  
//   auth: async (req, res, next) => {
//     const { userProfile, userPass } = req.body;
//     const [hashedPassword] = getUser(userProfile)
//     bcrypt.compare(userPass, hashedPassword.password, (err, result) => {
//         if (err) throw err;
//         if (result === true) {
//             const { userProfile } = req.body;
//             const token = jwt.sign(
//                 { userProfile: userProfile },
//                 process.env.SECRET_KEY,
//                 { expiresIn: "12h" }
//             );
//             res.cookie("jwt", token, { httpOnly: true });
//             next();
//         } else {
//             res.send({ msg: "The username or password did not match" });
//         }
//     });
// },

};

// export { middleware };
