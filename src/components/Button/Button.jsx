import './Button.css';
import React from 'react'

const Button = ({content="button",fncall,bgColor}) => {
  return (
    // <button className='btn'>Login</button>
    <button className='btn'
    style= {{'--bg-color':bgColor}}
    onClick={fncall}
    >{content}</button>
  )
}

export default Button
// done