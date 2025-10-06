import React, { use, useEffect, useState } from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";


const Navbar = () => {
  const onGreet = () => { console.log("welcome to react props") }
  const [showsidebar, setShowSidebar] = useState(false)
  const onToggleClick = () => {
    setShowSidebar(!showsidebar)
    console.log(showsidebar)
  }

  // useEffect(() => {console.log("useEffect hook is triggered")})
  // useEffect(() => {console.log("useEffect hook is triggered with empty dependency"),[]})
  // useEffect(() => {console.log("showsidebar state is changed with state dependency")},[showsidebar])

  useEffect(() => { const timer = setInterval(()=> console.log("tic tic"),2000) 
    return()=>clearInterval(timer)
  },[])
  return (
    <nav>

      <div className='logo' onClick={onGreet}>
        <img src="./vite.svg" alt="logo" />

      </div>
      <div className='navlinks'>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Products</a>
        <a href="">Contact</a>

      </div>
      {/* <div className='btn'>
               <Button content="Login" bgColor="orange" fncall={onGreet}/>
               <Button content="SignUp" bgColor="red"/>
             


            </div> */}
      <div className='authbtns'>
        <Button content='Login' fncall={onGreet} bgColor="orange" />
        <Button content='SignUp' fncall={onGreet} bgColor="red" />

      </div>
      <div className='toggleBar' onClick={onToggleClick}>
        {showsidebar ? <MdClose style={{ fontSize: '30px' }} /> : <FaBars style={{ fontSize: '30px' }} />}
      </div>
      {showsidebar &&
        <div className='toggleNavbar'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Products</a>
          <a href="">Contact</a>
        </div>
      }
    </nav>
  )
}

export default Navbar