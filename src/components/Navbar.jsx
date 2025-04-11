import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex place-content-center py-4 gap-6 bg-gray-100 shadow-sm'>
      <NavLink to="/" >
        Home
      </NavLink>

      <NavLink to="/pastes" >
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
