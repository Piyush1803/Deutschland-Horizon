import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT<span className='text-gray-700 font-medium'>-ME</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[500px]' src={assets.First} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Dutchland: Your Trusted Partner in Career Advising in Germany!
            At Dutchland, we understand the challenges individuals face when exploring career opportunities and planning their professional future in Germany.</p>
          <p>Dutchland is committed to excellence in career guidance. We continuously strive to enhance our platform, integrating the latest industry insights to improve user experience and deliver superior service. Whether you're starting an Ausbildung, searching for job opportunities, or advancing in your career, Dutchland is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Dutchland is to create a seamless career guidance experience for every individual. We aim to bridge the gap between aspiring professionals and opportunities in Germany, making it easier for you to access the right advice and resources to build a successful future.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>

      </div>

      <div className='flex flex-col md:flex-row md-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-purple-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EXPERTISE:
          </b>
          <p>Professional career guidance to help you navigate Ausbildung and job opportunities in Germany</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-purple-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONNECTIONS:</b>
          <p>Access to a wide network of employers, training institutions, and industry professionals.
            
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-purple-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>GROWTH:</b>
          <p>Personalized support to ensure long-term career success and development.</p>
        </div>
      </div>



    </div>
  )
}

export default About