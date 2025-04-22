import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);    

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
       
      </ul>

      <button
           onClick={() => setIsModalOpen(true)}
            className="bg-purple-400 text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-purple-500 transition-colors"
          >
           BOOK APPOINTMENT
          </button>

          {isModalOpen && <AppointmentModal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Navbar;