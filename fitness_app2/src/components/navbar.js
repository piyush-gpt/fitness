import React from 'react'
import logo from "../assets/logo/nav-logo.png"
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (

        <div className="nav flex justify-start  items-center sm:gap-32 gap-5 h-[60px]">
          <NavLink to="/"><img className="l:w[250px] mt-10 w-[50px] sm:w-[100px] xs:w-[80px]  ml-8 "src={logo} alt="logo"/></NavLink>
          <div className='nav-main flex h-12  justify-center items-end  gap-10 sm:gap-44 xs:text-2xl text-lg'>
            <NavLink className={`${({ isActive }) =>
         isActive ? "border-b-2 border-red-500" : undefined
        } text-yellow-100`} to="/">Home</NavLink>
            <a href='#exercises' className='text-yellow-100'>Exercises</a>
          </div>
        </div>
          
  );
}

export default Navbar