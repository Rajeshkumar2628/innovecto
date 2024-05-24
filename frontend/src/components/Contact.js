import React, { useState } from 'react'
import axios from 'axios'
import './home.css'
export default function Contact() {
    const [name, setName] = useState('')
    const [clg, setClg] = useState('')
    const [email, setEmail] = useState('')
    const [phno, setPhno] = useState('')
    const [ques, setQues] = useState('')
    const handleSubmit = () => {
        axios.post(`http://localhost:3001/contact/post`, { name: name, clg: clg, email: email, phone: phno, question: ques })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div class="contact">
    <div class="header"><h1>Contact us</h1></div>
    <div class="main">
    <h3>Contact us about anything related to our company or services.</h3>
    <h3>We'll do our best to get back to you as soon as possible.</h3>
    <form onSubmit={handleSubmit}>
        <div class="name">
        <label>Name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name..." />
        </div>
        <div class="college">
        <label>College</label>
        <input type='text' value={clg} onChange={(e) => setClg(e.target.value)} placeholder="College..." />
        </div>
        <div class="email">
        <label>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
        </div>
        <div class="number">
        <label>Phone Number</label>
        <input type='text' value={phno} onChange={(e) => setPhno(e.target.value)} placeholder="Phone number" />
        </div>
        <div class="question">
        <label>Question</label>
        <textarea value={ques} onChange={(e) => setQues(e.target.value)}></textarea>
        </div>
        <button type='submit'>Submit</button>
    </form>
    </div>
</div>
    )
}
