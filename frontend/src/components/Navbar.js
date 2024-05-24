import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
import './navbar.css'
export default function Navbar() {
    const auth=useAuth()
    const navigate = useNavigate()
  return (
    <nav className='header-nav'>
        {!auth.user &&<NavLink to='/'><div>Home</div></NavLink>}
        {!auth.user &&<NavLink to='/about'><div>About</div></NavLink>}
        {!auth.user &&<NavLink to='/service'><div>Service</div></NavLink>}
        {!auth.user &&<NavLink to='/contact'><div>Contact</div></NavLink>}
        {!auth.user &&<NavLink to='/signin'><div>SignIn</div></NavLink>}
        {!auth.user &&<NavLink to='/signup'><div>SignUp</div></NavLink>}
        {auth.user && <NavLink to='/dashboard'><div>DashBoard</div></NavLink>}
        {auth.user && <NavLink to='/quiz'><div>Quiz</div></NavLink>}
        {auth.user && <NavLink to='/'><div><button className='merriweather-light' onClick={()=>{auth.logout();navigate('/')}}>Logout</button></div> </NavLink>}
    </nav>
  )
}
