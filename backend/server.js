/*
Server.js
*/

//
import express from "express";
import { config } from "dotenv";
config();

import cors from "cors";

//
import userRouter from "./routes/userRoutes.js";
//
import productRouter from "./routes/productRoutes.js";

//
const app = express();
//
app.use(express.json());
//
app.use(cors());

// console.log(process.cwd());
//
app.use(express.static("views"));

app.use('/',userRouter)
app.use('/:id',userRouter)
app.use('/update/:id',userRouter)
app.use('/delete/:id',userRouter)
app.use('/user/deleteAll',userRouter)


// app.use('/',userRouter)
// app.use('/',userRouter)
// app.use('/',userRouter)
// app.use('/',userRouter)
//
app.use('/',productRouter); //
app.use('/:id',productRouter); //
app.use('/add',productRouter); //
app.use('/update/:id',productRouter); //
app.use('/delete/:id',productRouter); //
app.use('/delete/all',productRouter); //



//
const PORT = process.env.PORT;
//
app.listen(PORT, () => {
  console.log(`This server is running at Port: http://localhost:${PORT}`);
});

// export {server} from './server.js'
