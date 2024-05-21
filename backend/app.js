const express=require('express')
require('dotenv').config()
const users=require('./router/user')
const contact=require('./router/contact')
const connectDb=require('./config/db')
const cors=require('cors')
const app=express()
app.use(cors())
connectDb()
app.get('/',(req,res)=>{
    res.send("Home page")
})
app.use('/user',users)
app.use('/contact',contact)
connectDb()
// app.get('/get',(req,res)=>{
//     res.send("contact page")
// })
app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on Port ${process.env.PORT}`);
})