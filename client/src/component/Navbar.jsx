import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkStyle =
    'transition duration-200 hover:scale-105 px-2 py-1 rounded-md';
  const activeStyle = 'text-black font-semibold';
  const inactiveStyle = 'text-gray-600';

  return (
    <nav className="bg-[#e0e5ec] shadow-[inset_2px_2px_5px_#a3b1c6,_inset_-2px_-2px_5px_#ffffff] px-6 py-4 rounded-b-[20px] flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-700">MyApp</h1>

      <ul className="flex gap-6 font-medium">
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
