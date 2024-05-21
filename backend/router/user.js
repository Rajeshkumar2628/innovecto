const express=require('express')
const{SignUp,activate,signin}=require('../controller/auth-controller')
const bodyParser=require('body-parser')
const router=express.Router()
router.use(bodyParser.json())
router.get('/get',(req,res)=>{
        res.send("user page")
    })
router.post('/signup',SignUp)
router.get('/activate/:activationCode',activate)
router.post('/signin',signin)
module.exports=router