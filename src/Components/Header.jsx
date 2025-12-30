import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileImg from '../assets/images.jpg'

export default function Header() {
  return (
    <>
      <div className="py-5 px-10 bg-slate-300 text-lg flex justify-between shadow-sm rounded-sm">
        <div className="flex items-center gap-3">
          <img
            src={ProfileImg}
            alt="Navin Profile"
            className="w-12 h-12 rounded-full object-cover border-2 "
          />
          <span className="font-bold text-lg">Navin..</span>
        </div>

        <ul className="flex gap-10 underline">
          <li>
            <NavLink

              to="/"
              className={({ isActive }) =>
                `hover: lg:hover:bg-transparent 
                        ${isActive ? "text-orange-700 " : "text-gray-600"}
                         lg:border-0 font-bold hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover: lg:hover:bg-transparent 
                        ${isActive ? "text-orange-700 " : "text-gray-600"}
                         lg:border-0 font-bold hover:text-orange-700 lg:p-0`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover: lg:hover:bg-transparent 
                        ${isActive ? "text-orange-700 " : "text-gray-600"}
                         lg:border-0 font-bold hover:text-orange-700 lg:p-0`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}
