import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkStyle =
    'transition duration-200 ease-in-out hover:scale-105 px-3 py-1 rounded-md';
  const activeStyle = 'text-blue-700 font-semibold underline underline-offset-4';
  const inactiveStyle = 'text-gray-600';

  return (
    <nav className="bg-[#e0e5ec] shadow-[inset_2px_2px_6px_#a3b1c6,_inset_-2px_-2px_6px_#ffffff] px-8 py-4 rounded-b-[20px] flex justify-between items-center">
      {/* Brand / Logo */}
      <h1 className="text-2xl font-extrabold text-gray-700 tracking-wide font-[Poppins]">
        🚗 AutoTrack
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-8 font-medium text-lg">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
