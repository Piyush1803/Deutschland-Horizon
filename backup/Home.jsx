import React from "react";
import { FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";
import { assets } from '../assets/assets'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-gray-900">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold">Welcome to Deutschland</h1>
        <p className="mt-4 text-lg">
          Your gateway to a bright career in Germany. Explore Ausbildung programs, career opportunities, and study options.
        </p>
        <button className="mt-6 px-6 py-3 text-lg rounded-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-lg transition-transform transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl">
        {[
          { src: assets.Six, title: "Ausbildung Program", desc: "Begin your career in Germany with expert training and support." },
          { src: assets.Seven, title: "Career Opportunities", desc: "Explore job opportunities tailored for you with top employers." },
          { src: assets.Eight, title: "Study in Germany", desc: "Unlock your potential with world-class education opportunities." }
        ].map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
            <img src={card.src} className="w-full h-56 object-cover rounded-t-lg" alt={card.title} />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              <p className="text-gray-700 mt-3">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="flex space-x-6 mt-20 text-2xl">
        {[
          { icon: <FaInstagram />, link: "https://www.instagram.com/your_instagram_username", color: "hover:text-pink-500" },
          { icon: <FaEnvelope />, link: "mailto:your_email@example.com", color: "hover:text-blue-400" },
          { icon: <FaYoutube />, link: "https://www.youtube.com/@your_youtube_channel", color: "hover:text-red-600" }
        ].map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className={`${social.color} transition-colors transform hover:scale-110`}>
            {social.icon}
          </a>
        ))}
      </div>
 {/* Ausbildung Section */}
 <div className="mt-24 max-w-4xl text-left p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-blue-900 text-center">Ausbildung</h2>
        <p className="mt-6 text-lg text-gray-800">
          Ausbildung is a vocational training program in Germany that combines practical work experience with classroom education.
          We offer various types of Ausbildung programs, including:
        </p>
        <ul className="mt-6 text-lg list-disc list-outside text-gray-700 pl-6">
          <li>Dual Ausbildung – A mix of on-the-job training and school-based learning.</li>
          <li>School-based Ausbildung – Full-time education with practical internships.</li>
          <li>Pre-Apprenticeship Programs – For students who want to prepare for Ausbildung.</li>
        </ul>
      </div>

      {/* Ausbildung Requirements Box */}
      <div className="mt-12 p-10 bg-white rounded-lg shadow-lg max-w-4xl border border-gray-300 text-left">
        <h3 className="text-3xl font-semibold text-gray-900 text-center">Requirements for Ausbildung</h3>
        <ul className="mt-6 text-lg list-disc list-outside text-gray-700 pl-6">
          <li>Minimum age of 16 years.</li>
          <li>Basic German language skills (B1 level recommended).</li>
          <li>High school diploma or equivalent.</li>
          <li>Motivation and interest in the chosen field.</li>
          <li>Some programs may require an internship or prior experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
