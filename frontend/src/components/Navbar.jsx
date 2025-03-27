import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const handleLogout = () => {
    setToken(false);
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between py-4 mb-5 border-b border-gray-400 text-sm">
      <img 
        className="w-12 h-12 cursor-pointer" 
        src={assets.logo} 
        alt="Company Logo" 
        onClick={() => navigate('/')}
      />

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
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img 
              className="w-8 rounded-full" 
              src={assets.profile_pic} 
              alt="User Profile"
            />
            <img 
              className="w-2.5" 
              src={assets.dropdown_icon} 
              alt="Menu Dropdown"
            />
            <div className="absolute top-full right-0 pt-2 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-lg">
                <p 
                  onClick={() => navigate('/my-profile')} 
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p 
                  onClick={() => navigate('/my-appointments')} 
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p 
                  onClick={handleLogout}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
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