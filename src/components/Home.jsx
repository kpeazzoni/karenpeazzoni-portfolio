import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-teal-400'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Karen Peazzoni</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Hello, and welcome to my portfolio! I'm a recent Full Stack bootcamp graduate from The University of Texas at Austin. I'm passionate about programming, creating web apps, and seeing projects come to completion from front-end to back-end. I've spent the last 12 weeks honing my skills in ReactJS, Javascript, MongoDB, GraphQL, and various frameworks. I would love to help you out on a project or start something for you!
            </p>
            <div>
                <Link to="work">
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-400 hover:border-teal-400 hover:text-gray-700'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Home
