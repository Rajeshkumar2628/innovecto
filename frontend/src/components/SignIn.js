import React, {  useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth';
import './home.css'

export default function SignIn() {
    const [email, setEMail] = useState('')
    const [password, setPassword] = useState('')
    const[message,setMessage]=useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()
    const auth = useAuth()
    const check = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/user/signin/`,{email,password})
            .then(res => {
                console.log(res)
                console.log(res.data.user.password)
                console.log(password)
                if (res.status===200) {
                        setMessage('')
                        navigate('/dashboard')
                        auth.login(res.data.user?.username)
                }
                    else {
                        setMessage("Incorrect password")
                    }
                })
            .catch(err => console.log(err))
    }

return (
    <div className='main'>
        <form onSubmit={check}>
            <div><h3>Login page</h3></div>
            <div>
            <label>Email</label>
            <input type='email' onChange={(e) => {
                setEMail(e.target.value)
            }} /> </div><br></br>
            <div>
            <label>Password</label>
            <input type='password' onChange={(e) => {
                setPassword(e.target.value)
            }} /></div><br></br>
            <button className='log' type='submit'>Log in</button>
        </form><br></br>
        {errMsg}
    </div>
)
}