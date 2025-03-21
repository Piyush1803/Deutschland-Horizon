import React from 'react'
import {assets} from '../assets/assets'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-15 h-15 cursor-pointer' src={assets.logo} alt="Logo" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
          <NavLink>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
          </NavLink>
          <NavLink>
            <li className='py-1'>ABOUT USs</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
          </NavLink>
          <NavLink>
            <li className='py-1'>LOGIN</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
          </NavLink>
          <NavLink>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
          </NavLink>
        </ul>
        <div>
            <button>Create Account</button>
        </div>
    </div>
   
  )
}

export default Navbar