const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv = require('dotenv');
const app=express()
dotenv.config();


const PORT = process.env.PORT


app.use(express.json())
app.use(cors())

const userRouter=require("./Router/UserRouter")
app.use("/user",userRouter)

mongoose.connect(`${process.env.MONGO_URL}`,{},(err)=>{
    if(err){
        console.log("err in db")
    }
    else{
        console.log("successfully conect mongose")
    }
})

app.listen(PORT,()=>{
    console.log("server start this oprt",PORT)
})