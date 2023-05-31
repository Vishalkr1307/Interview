const mongoose=require("mongoose")
require("dotenv").config()

module.exports=()=>{
    return mongoose.connect(process.env.DB).then(()=>console.log("Database Connect success")).catch(()=>console.log("Databse Connect error"))
}
