const express=require('express')
const UserModel=require('../models/contact-models')
const bodyParser=require('body-parser')
const router=express.Router()
router.use(bodyParser.json())


router.get('/',(req,res)=>{
    res.send("cntxts page")
})
router.post('/post',(req,res)=>{
    console.log(req.body)
    const newUser=new UserModel(req.body)

    newUser.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("users contact page")
})

module.exports=router