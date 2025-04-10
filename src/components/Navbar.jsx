import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center bg-amber-500 py-4 gap-4 '>
        <NavLink to={"/"}>
             Home
        </NavLink>

        <NavLink to={"/pastes"}>
            Pastes
        </NavLink>
        
    </div>
  )
}

export default Navbar