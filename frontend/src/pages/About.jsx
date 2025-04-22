import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      
<div className='text-center text-2xl pt-10 text-gray-600'>
  <p>
    <span className='text-slate-800 font-semibold'>ABOUT</span>
    <span className='text-zinc-900 font-bold'>-US</span>
  </p>
</div>

<div className="my-10 flex flex-col md:flex-row gap-12 px-4">
  <img className="w-full md:max-w-[500px] rounded-xl shadow-lg" src={assets.Twelve} alt="" />

  <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
    <p className="text-lg leading-relaxed">
      Welcome to <strong className="text-slate-800">Dutchland</strong>: Your Trusted Partner in Career Advising in Germany!
      At Dutchland, we understand the challenges individuals face when exploring career opportunities and planning their professional future in Germany.
    </p>

    <p className="text-lg leading-relaxed">
      Dutchland is committed to excellence in career guidance. We continuously strive to enhance our platform, integrating the latest industry insights to improve user experience and deliver superior service. Whether you're starting an Ausbildung, searching for job opportunities, or advancing in your career, Dutchland is here to support you every step of the way.
    </p>

    <h3 className="text-2xl font-semibold text-zinc-800">Our Vision</h3>

    <p className="text-lg leading-relaxed">
      Our vision at <strong className="text-slate-800">Dutchland</strong> is to create a seamless career guidance experience for every individual. We aim to bridge the gap between aspiring professionals and opportunities in Germany, making it easier for you to access the right advice and resources to build a successful future.
    </p>
  </div>
</div>



      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>

      </div>

      <div className="flex flex-col md:flex-row md:gap-4 my-10">
  {/* EXPERTISE */}
  <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-base text-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-[1.02] hover:shadow-lg">
    <b className="text-lg">EXPERTISE:</b>
    <p>Professional career guidance to help you navigate Ausbildung and job opportunities in Germany</p>
  </div>

  {/* CONNECTIONS */}
  <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-base text-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-black hover:scale-[1.02] hover:shadow-lg">
    <b className="text-lg">CONNECTIONS:</b>
    <p>Access to a wide network of employers, training institutions, and industry professionals.</p>
  </div>

  {/* GROWTH */}
  <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-base text-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:bg-yellow-300 hover:text-black hover:scale-[1.02] hover:shadow-lg">
    <b className="text-lg">GROWTH:</b>
    <p>Personalized support to ensure long-term career success and development.</p>
  </div>
</div>



      </div>



    
  )
}

export default About