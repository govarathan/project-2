import express , { request, response } from "express";
import {PORT,mongoDBURL} from "./config.js"
import mongoose from 'mongoose';
import {Book} from "./models/bookModel.js";
import  booksRoute  from './routes/booksRoute.js';
import cors from 'cors'
const app = express();
// Middleware for parsing request body
app.use(express.json());
// Middleware for handling Cors policy
// Option 1: Allow All Origin with Default of cors(*)
app.use(cors());
// //Option2  Allow custom Orgins
// app.use(cors(
//   {
//     origin:["http://localhost:5173"],
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
//   }

// ))
app.get('/',(request,response)=>{
  console.log(request)
  return response.status(234).send('welcome To Mern Stack Tutorial');
});
app.use('/books', booksRoute);

mongoose 
.connect(mongoDBURL)
.then(()=>{
   console.log('App connected to database');
   app.listen(PORT,()=>{
    console.log(`App is listening to port: ${PORT}`)
  });
})

.catch((error)=>{
 console.log(error);
});

