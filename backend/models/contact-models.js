const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    clg:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true},
    question:{type:String,required:true}
})

const UserModel=mongoose.model('ContactusData',userSchema)

module.exports=UserModel

