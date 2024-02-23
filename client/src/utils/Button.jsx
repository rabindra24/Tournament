import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <Link to={'/contact'} className='border-2 mt-5 block max-w-[120px] rounded font-bold  text-white border-secondary p-3'>
    Contact Us
    </Link>
  )
}

export default Button