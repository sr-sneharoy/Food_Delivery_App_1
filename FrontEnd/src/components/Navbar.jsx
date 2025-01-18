import React from 'react'
import { NavLink} from 'react-router-dom';
import './Nav.css'

const Navbar = () => {
  return (
      <div className='w-full bg-emerald-500 text-white flex justify-center items-center'>
        <div className="mx-10 max-w-[1400px] lg:w-[1400px] md:w-[760px] sm:w-[650px] w-[400px] flex items-center justify-between ">
          <div className='flex sm:gap-8 gap-4 items-center'>
            <NavLink to='/' className="text-3xl italic font-bold"> GoFood </NavLink>
            <NavLink to='/' className={({isActive}) => (isActive ? "active-link" : "none")}> Home </NavLink>
          </div>

          <div className='flex gap-2 items-center'>
            <NavLink to='/login' className={({isActive}) => (isActive ? "active-link" : "none")}> Log In </NavLink>
            <NavLink to='/signup' className={({isActive}) => (isActive ? "active-link" : "none")}> SignUp </NavLink>
          </div>
        </div>

      </div>


  )
}

export default Navbar