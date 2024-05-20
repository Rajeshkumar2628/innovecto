import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const [name, setName] = useState('')
    const [clg, setClg] = useState('')
    const [email, setEmail] = useState('')
    const [phno, setPhno] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = () => {
        axios.post(`http://localhost:3001/users/post`, { username: name, password: password, email: email })
            .then(navigate('/Dashboard'))
            .catch(err => alert('error'))

    }
    return (
        <div className='abc-up'>
            <form className='bcd-up' onSubmit={handleSubmit}>
                <h1>Sign up page</h1>
                <label>UserName</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br/>
                <label>College</label>
                <input type='text' value={clg} onChange={(e) => setClg(e.target.value)} /><br/>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                <label>Phone Number</label>
                <input type='text' value={phno} onChange={(e) => setPhno(e.target.value)} /><br/>
                <label>Password</label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}
