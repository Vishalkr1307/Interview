const express=require("express")
const router=express.Router()
const axios=require("axios")
const User=require("..//module/User")
require("dotenv").config()

router.get("",async (req,res)=>{
    try{
        let user=await axios.get("https://gorest.co.in/public-api/users",{
            headers: {
                Authorization: `Bearer ${process.env.API_TOKEN}`,
              },
        })
        let users=await User.insertMany(user.data.data)
        users=await User.find().lean().exec()
        
        
        return res.status(200).send(users)

    }
    catch(err){
        return res.status(400).send(err)
    }
})
router.post("",async (req,res)=>{
    try{
        let user=await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).send("User already exists")
        }
        user=await User.create(req.body)
        return res.status(200).send(user)

    }
    catch(err){
        return res.status(400).send(err)
    }
})
router.put("/:id",async (req,res)=>{
    try{
        
        let user=await User.findByIdAndUpdate(req.params.id,req.body)
            
        
        return res.status(200).send(user)

    }
    catch(err){
        return res.status(400).send(err)
    }
})
router.get("/:id",async (req,res)=>{
    try{
        
        let user=await User.findById(req.params.id)
            
        
        return res.status(200).send(user)

    }
    catch(err){
        return res.status(400).send(err)
    }
})

module.exports=router

