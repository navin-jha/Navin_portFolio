import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ProfileImg from "../assets/images.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-300 shadow-sm relative z-50">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={ProfileImg}
            alt="Navin Profile"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2"
          />
          <span className="font-bold text-base md:text-lg">Navin..</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 underline font-bold">
          {["/", "/about", "/contact"].map((path, i) => (
            <li key={i}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-600"}
                   hover:text-orange-700`
                }
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
      >
        <ul className="flex flex-col py-4">
          {["/", "/about", "/contact"].map((path, i) => (
            <li key={i}>
              <NavLink
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-3 text-center font-semibold
                   ${isActive ? "text-orange-700 bg-orange-50" : "text-gray-700"}
                   hover:bg-gray-100`
                }
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
