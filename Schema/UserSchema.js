  const mongoose=require("mongoose")
  const Schema=mongoose.Schema

  const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        require:true
    },
    experienceyear:{
        type:Number,
        required:true
    }
  })

  module.exports=mongoose.model("user",userSchema)