import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'


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
            
    
    </nav>
  )
}

export default Navbar