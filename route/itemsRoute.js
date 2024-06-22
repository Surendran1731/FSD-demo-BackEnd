import express from "express";
import itemModel from '../model/itemModel.js'

const router=express.Router()

router.post('/add-items',async (req,res)=>{
     try{
          const newItems=new itemModel(req.body);
          await newItems.save() //create new items
          res.send("Item Created Successfully") 
     }
     catch(error){
          res.status(400).json(error)
     }
})


//get items
router.get('/get-items',async (req,res)=>{
     try{
          const getItems=await itemModel.find({});
          res.send(getItems) 
     }
     catch(error){
          res.status(400).json(error)
     }
})


//delete items

router.post('/delete-items',async (req,res)=>{
     try{
          const deleteItems=await itemModel.findOneAndDelete({_id:req.body.itemId});
          deleteItems
          ?res.send("Items Deleted Successfully") 
          :res.status(404).send("Item not Found")
     }
     catch(error){
          res.status(400).json(error)
     }
})

//update items

router.post('/edit-items',async (req,res)=>{
     try{
           await itemModel.findOneAndUpdate({_id:req.body.itemId},req.body);
           res.send("Items Updated Successfully") 
     }
     catch(error){
          res.status(400).json(error)
     }
})


export default router