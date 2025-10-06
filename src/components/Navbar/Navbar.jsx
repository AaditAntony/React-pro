import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import { FaBars } from "react-icons/fa6";


const Navbar = () => {
  const onGreet=()=>{console.log("welcome to react props")}
  
  return (
    <nav>
        
            <div className='logo' onClick={onGreet}>
                <img src= "./vite.svg" alt="logo"/>
        
            </div>
            <div className='navlinks'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Products</a>
                <a href="">Contact</a>
               
            </div>
            <div className='btn'>
               <Button content="Login" bgColor="orange" fncall={onGreet}/>
               <Button content="SignUp" bgColor="red"/>
             


            </div>
            <div className='authbtns'>
<Button content='Login' fncall={onGreet} bgColor="orange"/>
<Button content='SignUp' fncall={onGreet} bgColor="red"/>

            </div>
            <div className='toggleBar'><FaBars  /></div>
    
    </nav>
  )
}

export default Navbar