import React, { useEffect, useState } from "react";
import { FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";
import { assets } from '../assets/assets';


const aboutMeData = [
  {
    image: assets.First,
    title: "How I Came to Germany",
    description: "I worked in finance in India before deciding to move to Germany for new experiences and growth. With guidance from a consultancy, I took the leap—and it’s been the best decision of my life."
  },
  {
    image: assets.Second,
    title: "My Personal Experience",
    description: "Adapting to Germany was challenging at first due to language and cultural differences. But over time, I embraced the change, made friends, and found a new sense of belonging."
  },
  {
    image: assets.Third,
    title: "Management Trainee Journey",
    description: "I began as a management trainee at a 4-star hotel. It was a great experience—friendly coworkers, a lively environment, and plenty of opportunities to grow professionally."
  },
  {
    image: assets.Four,
    title: "Part-Time Work Opportunities",
    description: "Germany offers many part-time job options. These roles not only helped me financially but also allowed me to build local experience and gain new skills along the way."
  }
];


const slides = [
  {
    title: "Ausbildung Program",
    desc: "Begin your career in Germany with expert training and support.",
    image: assets.Six,
    bg: "bg-yellow-100"
  },
  {
    title: "Career Opportunities",
    desc: "Explore job opportunities tailored for you with top employers.",
    image: assets.Seven,
    bg: "bg-blue-100"
  },
  {
    title: "Study in Germany",
    desc: "Unlock your potential with world-class education opportunities.",
    image: assets.Eight,
    bg: "bg-red-100"
  }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900 bg-gradient-to-b from-white via-blue-50 to-white">

      

      {/* Hero Slider Section */}
<div className="relative w-full h-[500px] overflow-hidden">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute top-0 left-0 w-full h-full flex items-center justify-between rounded-none px-4 sm:px-6 shadow-md transition-all duration-1000 ease-in-out
        ${index === currentSlide ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 -translate-x-10 z-0'}
        ${slide.bg}
      `}
    >
      <div className="w-1/2 space-y-6 pl-4 sm:pl-10">
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-sm">{slide.title}</h1>
        <p className="text-xl text-gray-700 leading-relaxed">{slide.desc}</p>
        <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-full shadow hover:bg-orange-600 transition duration-300">
          Get Started
        </button>
      </div>
      <div className="w-1/2 flex justify-center items-center pr-4 sm:pr-10">
        <img
          src={slide.image}
          alt={slide.title}
          className="max-h-[500px] object-contain rounded-xl"
        />
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
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className={`${social.color} transition-transform hover:scale-110`}>
            {social.icon}
          </a>
        ))}
      </div>

{/* About Me Section */}
<div className="mt-24 w-full bg-gradient-to-r from-gray-50 to-gray-100 p-8">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
  <div className="space-y-20">
    {aboutMeData.map((item, index) => {
      const borderColors = ["border-red-400", "border-blue-400", "border-green-400", "border-yellow-400"];
      const titleHoverColors = ["hover:text-red-500", "hover:text-blue-500", "hover:text-green-500", "hover:text-yellow-500"];
      
      const borderColor = borderColors[index % borderColors.length];
      const titleHoverColor = titleHoverColors[index % titleHoverColors.length];

      return (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className={`w-full md:w-2/3 lg:w-3/4 xl:w-2/3 h-96 object-cover rounded-2xl shadow-lg border-4 ${borderColor}`}
          />
          <div className="w-full md:w-1/2 group">
            <h3 className={`text-2xl font-bold text-gray-800 mb-4 transition-all duration-300 transform group-hover:scale-105 ${titleHoverColor}`}>
              {item.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed transition-all duration-300 transform group-hover:scale-105 group-hover:text-gray-900">
              {item.description}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>





{/* Ausbildung Section */}
<div className="mt-24 w-full bg-gradient-to-r from-blue-50 to-blue-100 p-8">
  <h2 className="text-4xl font-bold text-blue-900 text-center">Ausbildung</h2>
  <p className="mt-6 text-lg text-gray-800 text-center">
    Ausbildung is a vocational training program in Germany that combines practical work experience with classroom education.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-center px-4">
    {[
      { title: "🌐 Dual Ausbildung", desc: "A mix of on-the-job training and school-based learning." },
      { title: "📚 School-based Ausbildung", desc: "Full-time education with practical internships." },
      { title: "✨ Pre-Apprenticeship", desc: "For students preparing for full Ausbildung programs." }
    ].map((item, i) => (
      <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>

  {/* Requirements for Ausbildung */}
  <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mx-4">
    <h3 className="text-4xl font-bold text-blue-900 text-center">Requirements for Ausbildung</h3>
    
    {/* 👇 Added margin-top here for spacing */}
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-700">
      <ul className="list-disc list-inside space-y-2">
        <li>Minimum age of 16 years</li>
        <li>Basic German language skills (B1 level recommended)</li>
        <li>High school diploma or equivalent</li>
      </ul>
      <ul className="list-disc list-inside space-y-2">
        <li>Motivation and interest in the chosen field</li>
        <li>Some programs may require prior experience or internship</li>
      </ul>
    </div>
  </div>
</div>


      {/* Career Opportunities Section */}
      <div className="mt-24 w-full bg-gradient-to-r from-green-50 to-green-100 p-8">
        <h3 className="text-4xl font-bold text-green-900 text-center mb-6">Career Opportunities in Germany</h3>
        <p className="text-lg text-gray-700 text-center mb-8">
          Germany offers a wide range of career paths for international professionals in high-demand sectors like IT, engineering, and healthcare.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-4">
          {[
            { icon: "💻", title: "IT & Software", desc: "Opportunities for developers, analysts, and cybersecurity experts." },
            { icon: "🏥", title: "Healthcare", desc: "Demand for nurses, caregivers, and medical assistants." },
            { icon: "🔧", title: "Engineering", desc: "High demand for mechanical, electrical, and civil engineers." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.icon} {item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Study in Germany Section */}
      <div className="mt-24 w-full bg-gradient-to-r from-red-50 to-red-100 p-8">
        <h2 className="text-4xl font-bold text-red-900 text-center">Study in Germany</h2>
        <p className="mt-6 text-lg text-gray-800 text-center">
          Germany offers high-quality, low-cost education at globally recognized universities. 
          Many programs are available in English, with opportunities for scholarships and post-study work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-center px-4">
          {[
            { icon: "🏛️", title: "Top Universities", desc: "Study at TU Munich, Heidelberg, RWTH Aachen and other renowned institutions." },
            { icon: "🎓", title: "Affordable Education", desc: "Most public universities have no tuition fees, even for international students." },
            { icon: "💼", title: "Work & Stay", desc: "Students can work part-time and get up to 18 months to find a job after graduation." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.icon} {item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomePage;
