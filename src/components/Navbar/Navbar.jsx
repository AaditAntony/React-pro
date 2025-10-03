import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'


const Navbar = () => {
  return (
    <nav>
        
            <div className='logo'>
                <img src= "./vite.svg" alt="logo"/>
        
            </div>
            <div className='navlinks'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Products</a>
                <a href="">Contact</a>
               
            </div>
            <div className='btn'>
               <Button/>
               <Button/>


            </div>
            
    
    </nav>
  )
}

export default Navbar