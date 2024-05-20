import React, { useState } from 'react'
import axios from 'axios'
export default function Contact() {
    const [name, setName] = useState('')
    const [clg, setClg] = useState('')
    const [email, setEmail] = useState('')
    const [phno, setPhno] = useState('')
    const [ques, setQues] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:3001/contact/post`, { name: name, clg: clg, email: email, phone: phno, ques: ques })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Contact us</h1>
            <h3>Contact us about anything related to our company or services.</h3>
            <h3>We'll do our best to get back to you as soon as possible.</h3>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br/>
                <label>College</label>
                <input type='text' value={clg} onChange={(e) => setClg(e.target.value)} /><br/>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                <label>Phone Number</label>
                <input type='text' value={phno} onChange={(e) => setPhno(e.target.value)} /><br/>
                <label>Question</label>
                <textarea value={ques} onChange={(e) => setQues(e.target.value)} /><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
