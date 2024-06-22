import mongoose from "mongoose";

const itmesSchema=mongoose.Schema(
     {
          name:{
               type:String,
               required:true
          },
          price:{
               type:Number,
               required:true
          },
          category:{
               type:String,
               required:true
          },
          image:{
               type:String,
               required:true
          }

     },
     { timeStamps:true }
)

const itemModel = mongoose.model("items", itmesSchema)

export default itemModel