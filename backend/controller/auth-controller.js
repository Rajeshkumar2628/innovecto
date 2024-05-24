const UserModel=require('../models/user-models')
const{v4:uuidv4}=require('uuid')
const bcrypt=require('bcryptjs')
const nodemailer=require('nodemailer')

exports.SignUp=async(req,res)=>{
    const{username,clg,email,phone,password}=req.body
    let user=await UserModel.findOne({email})
    if(user){
        return res.status(400).json({message:"Email already registered"})
    }

    const activationCode=uuidv4()

    const salt=await bcrypt.genSalt(10)
    const hashPassword=await bcrypt.hash(password,salt)

    user=new UserModel({
        username,clg,email,phone,password:hashPassword,activationCode
    })

    await user.save()

    const transport=nodemailer.createTransport({
        host:"smtp.zoho.in",
        port:465,
        secure: true,
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    })

    await transport.verify();
    console.log('SMTP server is ready to take messages');

    const activationLink=`http://localhost:${process.env.PORT}/user/activate/${activationCode}`

    const mailOptions={
        from:process.env.EMAIL_USER,
        to:email,
        subject:`Verify your account ${activationLink}`,
        text: `Please click on the following link to activate your account: ${activationLink}`

    }

    // transport.sendMail(mailOptions,(err,info)=>{
    //     if(err){
    //         console.error('Error sending email:', err);
    //         return res.status(500).json({message:"Cannot send Activation link"})
    //     }
    //     else {
    //         return res.status(200).json({message:"Activation Link sent to your email"})
    //     }
    // })
    const sendMail = (options) => {
        return new Promise((resolve, reject) => {
            transport.sendMail(options, (err, info) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(info);
                }
            });
        });
    };

    try {
        await sendMail(mailOptions);
        return res.status(200).json({ message: "Activation Link sent to your email" });
    } catch (err) {
        console.error('Error sending email:', err);
        return res.status(500).json({ message: "Cannot send Activation link" });
    }
}
    exports.activate=async(req,res)=>{
        const{activationCode}=req.params
        let user=await UserModel.findOne({activationCode})
        if(!user){
            res.status(500).json({message:"cannot sent activatiton link"})
        }
        user.isActivated=true
        user.save()
        res.status(200).json({message:"Account Activated Successfully"})
    }

    exports.signin=async(req,res)=>{
        const{email,password}=req.body
        let user=await UserModel.findOne({email})
        if(!user){
            return res.status(400).json({message:"Email not found"})
        }
        const isMatching=await bcrypt.compare(password,user.password)
        if(!isMatching){
            return res.status(400).json({message:"Password incorrect"})
        }
        if(!user.isActivated){
            return res.status(400).json({message:"Email is not verfied please verify to continue"})
        }
        return res.status(200).json({message:"Login Successfull",user})
    }
