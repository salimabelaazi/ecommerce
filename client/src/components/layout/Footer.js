import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' >
        <h1 className='text-center'> 
        All Right Reserved 
        </h1>
        <p  className="text-center.mt-3">
          <link to="/about">About </link>  | <link to="/contact">Contact </link>| 
          <link to="/policy">Privacy Policy </link> 
          </p>
    </div>
  )
}

export default Footer