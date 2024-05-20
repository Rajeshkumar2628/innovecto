const UserModel=require('../models/user-models')
const{v4:uuidv4}=require('uuid')
const bcrypt=require('bcryptjs')
const nodemailer=require('nodemailer')

exports.SIgnUp=async(req,res)=>{
    const{email,password,username,clg}=req.body
    let user=await UserModel.findOne({email})
    if(user){
        return res.status(400).json({message:"Email already registered"})
    }

    const activationCode=uuidv4()

    const salt=await bcrypt.genSalt(10)
    const hashPassword=await bcrypt.hash(password,salt)

    user=new UserModel({
        username,clg,email,password:hashPassword,activationCode
    })

    await user.save()

    const transport=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    })

    const activationLink=`http://localhost:${process.env.PORT}/auth/activate/${activationCode}`

    const mailOptions={
        from:"process.env.EMAIL_USER",
        to:email,
        subject:`Verify your account ${activationLink}`

    }

    transport.sendMail(mailOptions,(err,info)=>{
        if(err){
            return res.status(500).json({message:"Cannot send Activation link"})
        }
        else {
            return res.status(200).json({message:"Activation Link sent to your email"})
        }
    })
}