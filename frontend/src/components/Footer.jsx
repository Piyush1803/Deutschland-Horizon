import React from 'react';
import { assets } from '../assets/assets';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 px-6 md:px-20 py-16 border-t border-gray-200 transition-colors duration-300">
      
      {/* Grid */}
      <div className="grid gap-12 md:gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr]">
        
        {/* Logo & Description */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Dutchland Logo" />
          <p className="text-sm leading-relaxed max-w-md text-gray-600">
            Dutchland is your trusted partner in career advising, specializing in Ausbildung programs and job opportunities in Germany. We offer expert guidance and personalized support to help you build a successful future.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Company</h3>
          <ul className="space-y-2 text-sm">
            {['Home', 'About Us', 'Contact Us', 'Privacy Policy'].map((item, index) => (
              <li key={index} className="hover:text-orange-500 transition duration-200 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Get in Touch</h3>
          <ul className="text-sm space-y-2">
            <li>+91-1234567890</li>
            <li>abc@gmail.com</li>
          </ul>
          <div className="flex gap-4 mt-4 text-2xl text-gray-500">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition"><FaFacebook /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t pt-6 border-gray-200">
        <p className="text-center text-xs text-gray-500">
          © 2025 Dutchland – All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
