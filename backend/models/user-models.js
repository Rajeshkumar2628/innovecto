const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    clg:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    activationCode:{type:String,required:true,default:null},
    isActivated:{type:Boolean,required:true,default:false}
})

const UserModel=mongoose.model('UserSignupData',userSchema)

module.exports=UserModel