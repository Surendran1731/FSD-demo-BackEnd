import mongoose from "mongoose";

const billSchema=mongoose.Schema(
     {
          cust_name:{
               type:String,
               required:true
          },
          cust_phone:{
               type:Number,
               required:true
          },
          total_amount:{
               type:Number,
               required:true
          },
          //calculate tax =>2% =>((2*total_amount)/100)
          tax:{
               type:Number,
               required:true
          },
          subtotal:{
               type:Number,
               required:true
          },
          paymode:{
               type:String,
               required:true
          },
          cartitems:{
               type:Array,
               required:true
          }
     },
     { timeStamps:true }
)

const billModel=mongoose.model("bills",billSchema)

export default billModel