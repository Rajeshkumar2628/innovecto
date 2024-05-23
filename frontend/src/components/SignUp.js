import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './home.css'
export default function SignUp() {
    const [name, setName] = useState('')
    const [clg, setClg] = useState('')
    const [email, setEmail] = useState('')
    const [phno, setPhno] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = () => {
        axios.post(`http://localhost:3001/user/signup`, { username: name, clg:clg, email: email,phone:phno, password: password, })
            .then(navigate('/signin'))
            .catch(err => alert('error'))

    }
    return (
        <div className='main'>
            <form className='bcd-up' onSubmit={handleSubmit}>
                <h3>Sign up page</h3>
                <div>
                <label>UserName</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br/>
                </div>
                <div>
                <label>College</label>
                <input type='text' value={clg} onChange={(e) => setClg(e.target.value)} /><br/>
                </div>
                <div>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                </div>
                <div>
                <label>Phone Number</label>
                <input type='text' value={phno} onChange={(e) => setPhno(e.target.value)} /><br/>
                </div>
                <div>
                <label>Password</label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                </div>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}
