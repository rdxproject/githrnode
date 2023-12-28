const UserSchema=require("../Schema/UserSchema")

const getalldata=(req,res)=>{
    UserSchema.find((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err forer faching data",
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(404).json({
                    message:"err for finding data"
                })
            }
            else{
                res.status(202).json({
                    message:"successfully finding data",
                    data:data
                })
            }
        }
    })
}


const adduser=(req,res)=>{
    console.log(req.body)

    const user=new UserSchema(req.body)

    user.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for add user",
            })
        }
        else{
            res.status(202).json({
                message:"successfully add user",
                data:data
            })
        }
    })
}

const deleteuser=(req,res)=>{
    const id=req.params.id

    UserSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for delete data"
            })
        }
        else{
            res.status(202).json({
                message:"successfully delete data",
                data:data
            })
        }
    })
}

const finduser=(req,res)=>{
    const id=req.body.id

    UserSchema.findById(id,(err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for find data"
            })
        }
        else{
            res.status(202).json({
                message:"successfully find user",
                data:data
            })
        }
    })
}


const updateuser=(req,res)=>{
    const id=req.params.id


    UserSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(404).json({
                messages:"err for update user"
            })
        }else{
            res.status(202).json({
                message:"suxccessfully update users",
                data:data
            })
        }
    })
}


module.exports={
    getalldata,
    adduser,
    deleteuser,
    finduser,
    updateuser
}