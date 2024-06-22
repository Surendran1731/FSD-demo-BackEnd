import express from "express";
import  billModel  from '../model/billsModel.js'

const router=express.Router()

router.post('/charge-bill',async (req,res)=>{
    try{
     const newBill=new billModel(req.body);
     await newBill.save() //creates a bill
     res.send("Bill Generated Successfully")
    }
    catch(error){
     res.status(400).json(error)
    }

})


//get bill

router.get('/get-bill',async (req,res)=>{
     try{
      const bill=await billModel.find();
      res.send(bill)
     
     }
     catch(error){
      res.status(400).json(error)
     }
 
 })




export default router