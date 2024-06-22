import express from "express";
import mongoose from 'mongoose';
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import userRoute from './route/userRoute.js'
import itemRoute from './route/itemsRoute.js'
import billRoute from './route/billRoute.js'



const app=express();
const PORT=2429;
app.use(express.json());
app.use(cors());
                                          
app.use('/users',userRoute)
app.use('/items',itemRoute)
app.use('/bills',billRoute)


app.get('/',(req,res)=>{
     res.send('Welcome to Zepto Management')
})
 

mongoose.connect(process.env.MONGO_URL)
.then(() =>{
     console.log('MongoDB Connected Succesfull!')
     app.listen(PORT,()=>console.log('Server is Connected the Port:'+ PORT))
})
.catch((error)=>console.log('Error connecting database'))
