const mongoose=require("mongoose")

const userScheam=new mongoose.Schema({
    id:{type:Number,require:true},
    name:{type:String,require:true},
    email:{type:String,require:true},
    status:{type:String,require:true},
},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("user",userScheam)