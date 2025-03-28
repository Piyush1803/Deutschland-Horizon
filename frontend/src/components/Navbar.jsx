import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // Top level pe hooks
  const [token, setToken] = useState(false);        // Top level pe hooks

  return (
    <div className="flex items-center justify-between py-4 mb-5 border-b border-gray-400 text-sm">
      <img className="w-25 h-12 cursor-pointer" src={assets.logo} alt="Logo" />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/" className="group">
          <li className="py-1 hover:text-purple-600 transition-colors">HOME</li>
          <hr className="border-none h-0.5 bg-purple-600 w-3/5 mx-auto hidden group-hover:block" />
        </NavLink>
        <NavLink to="/about" className="group">
          <li className="py-1 hover:text-purple-600 transition-colors">ABOUT US</li>
          <hr className="border-none h-0.5 bg-purple-600 w-3/5 mx-auto hidden group-hover:block" />
        </NavLink>
        <NavLink to="/login" className="group">
          <li className="py-1 hover:text-purple-600 transition-colors">LOGIN</li>
          <hr className="border-none h-0.5 bg-purple-600 w-3/5 mx-auto hidden group-hover:block" />
        </NavLink>
       
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div>
            <img src={assets.profile_pic} alt="" />
            <img src={assets.dropdown_icon} alt="" />
          </div> 
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-purple-400 text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-purple-500 transition-colors"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;