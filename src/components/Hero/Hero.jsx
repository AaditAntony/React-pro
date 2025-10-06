import React from "react";
import './Hero.css'
import PropTypes from 'prop-types'


export const Hero = ({UserName,UserAge}) => {
  return (
    <div>This is hero section
      <p> your user name ::{UserName}</p>
      <p>your age is ::{UserAge}</p>
    </div>
  )
}

Hero.propTypes={
  UserName:PropTypes.string,
  UserAge:PropTypes.number
}
export default Hero