const express=require('express')
const app= express()
const User=require("./moduleControl/user")
app.use(express.json())
app.use("/users",User)


module.exports=app
