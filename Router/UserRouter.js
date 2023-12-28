const express=require("express")
const multer=require("multer")
const Router=express.Router()


const Usercontroller=require("../Controller/UserController")

const uplode=multer({})


Router.post("/add",uplode.single(""),Usercontroller.adduser)
Router.get("/find",Usercontroller.getalldata)
Router.delete("/delete/:id",Usercontroller.deleteuser)
Router.post("/find",uplode.single(""),Usercontroller.finduser)
Router.put("/up/:id",uplode.single(""),Usercontroller.updateuser)



module.exports=Router