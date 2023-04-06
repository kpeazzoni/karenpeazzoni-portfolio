import React from "react";
import JavaScript from "../assets/javascript.png";
import Css from "../assets/css.png";
import ReactJS from "../assets/react.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import HTML from "../assets/html.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-teal-400">Skills</p>
          <p className="py-4">//These are the technologies I've learned and worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className='w-20 mx-auto' src={Css} alt="CSS icon" />
                <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className='w-20 mx-auto' src={ReactJS} alt="React icon" />
                <p className="my-4">REACT.JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                <p className="my-4">NODE.JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                <p className="my-4">MONGODB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                <p className="my-4">TAILWIND</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                <p className="my-4">GITHUB</p>
            </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
