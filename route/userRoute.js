import express from "express";
import userModel  from '../model/userModel.js'

const router=express.Router()

//register
router.post('/register',async (req,res)=>{
     try{
          const newUser=new userModel({...req.body,verified:true});
          await newUser.save()     //save() create a new user
          res.send("User created Successfully")
     }
     catch(error){
          res.send({message:"Error Creating New User"})
     }

})

//Login
router.post('/login',async (req,res)=>{
     try{
          const user=userModel({  
               userId:req.body.userId,
               password:req.body.password,
               verified:true
          });
          if(user){
               res.send({message:"Login Successfully",user})
          }
          else{
               res.send({message:"Login Unsuccessfully",user})
          }
     }
     catch(error){
         res.status(400).json(error)
     }

})


export default router