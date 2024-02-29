/*
Server.js
*/

// Importing express dependency that will allow use to run the instance o our service
import express from "express";
// Importing the dotenv dependency which will allow us to retrieve the ENV data.
import { config } from "dotenv";
// Importing the config setting from the .env File 
config();
// Importing the cors dependency which will allow the connection between the different files and such to allow the exporting of specific data.
import cors from "cors";
// Importing jsonwebtoken dependency allowing the setting of tokens. 
import jwt from "jsonwebtoken";
// Importing the bcrypt dependency which will allow use to run functions that will allow the hashing of the users password 
import bcrypt from 'bcrypt'
// Cookie parser dependency to make use of cookies and setting of cookies.
import cookieParser, { JSONCookie } from "cookie-parser";


//
// import { middleware } from "./middleware/middleware.js";

// Importing our user router from the routes file which will allow the use of our specific routes which make use of specific functions from the controller.
import userRouter from "./routes/userRoutes.js";
// Importing our product router from the routes file which will allow the use of our specific routes which make use of specific functions from the controller.
import productRouter from "./routes/productRoutes.js";

// Declaring the use of the express dependency to run the initial instance of our server.
const app = express();
// Defining the use of json data within thee instance of our service. 
app.use(express.json());
// Defining the use of the cors dependency.
app.use(cors());
// Configuration object for CORS (Cross-Origin Resource Sharing)
const corsOptions = {
  // List of allowed origins that can access your resources
  origin: ['http://localhost:8080', 'https://nodejseomp-1.onrender.com'],
  
  // List of allowed HTTP methods for cross-origin requests
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],

  // List of allowed headers in the actual request
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Applying CORS middleware to the Express app with the specified options
app.use(cors(corsOptions));



// Use of express to define a static page which will store the specific purpose of each of our paths.
app.use(express.static("views"));

// Defining the use of our specific user routes by our app/ instance of our server.
app.use('/',userRouter)
app.use('/:id',userRouter)
app.use('/add',userRouter)
app.use('/update/:id',userRouter)
app.use('/delete/:id',userRouter)
app.use('/user/deleteAll',userRouter)

// Defining the use of our specific user routes by our app/instance of our server. These are routes that are still to be defined and implemented as the basic functionality have been written however the integration of this code is still to be done.
// app.use('/',userRouter)
// app.use('/',userRouter)
// app.use('/',userRouter)
// app.use('/',userRouter)

// Defining the use of our specific product routes by our app/ instance of our server.
app.use('/',productRouter); //
app.use('/:id',productRouter); //
app.use('/add',productRouter); //
app.use('/update/:id',productRouter); //
app.use('/delete/:id',productRouter); //
app.use('/delete/all',productRouter); //

//
// app.use(middleware.auth)

// Defining the use of the cookie parser dependency by our app/server instance
app.use(cookieParser())
//
// app.use(JSONCookie())
// Assigning the value of our PORT retrieved from our .env file to a constant for later use.
const PORT = process.env.PORT;
// The instance of our server is now hosted onto the web at the following port number
app.listen(PORT, () => {
  console.log(`This server is running at Port: http://localhost:${PORT}`);
});