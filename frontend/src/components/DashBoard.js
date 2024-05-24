import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function DashBoard() {
  const auth=useAuth()
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate("/quiz")
  }
  return (
    <div>
      <h1>Dashboard page</h1>
      <h3>Welcome {auth.user}</h3>
      <button onClick={handleClick}>Click Here To Take Your Test</button>
    </div>
  )
}
