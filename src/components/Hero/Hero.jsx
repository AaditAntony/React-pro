import React, { useState } from "react";
import './Hero.css'
import Button from "../Button/Button";



export const Hero = ({UserName,UserAge}) => {
  const [count,setCount]=useState(0);
  // const onHandleClick=()=>{
  //   setCount(count+1)
  //   setCount(count+1)
  //   setCount(count+1)  // only update once that is if count is 0 it will be 1 not 3
  // }
  const onHandleClick=()=>{
    setCount(prev => prev+1)
    setCount(prev => prev+1)  // here prev is previous value of count so it will be 3 if initial value is 0
    setCount(prev => prev+1)
    
  }
  return (
    <div>This is hero section
      <p> your user name ::{UserName}</p>
      <p>your age is ::{UserAge}</p>

      <h1> COUNT :{count} </h1>
      <Button fncall={onHandleClick} content="Count here"/>
    </div>
  )
}


export default Hero