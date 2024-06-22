import mongoose from "mongoose";

const userSchema=mongoose.Schema(
     {
          name:{
               type:String,
               required:true
          },
          userId:{
               type:String,
               required:true
          },
          password:{
               type:String,
               required:true
          },
          role:{
               type:String,
               required:true,
               default:"user",
               enum:["admin","user"]
          },
          verified:{
               type:Boolean,
               required:true,
               default:true
          }
     },
     { timestamps:true }
)

const userModel = mongoose.model("users", userSchema)

export default userModel
