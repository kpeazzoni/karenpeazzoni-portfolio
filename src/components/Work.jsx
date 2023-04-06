import React from "react";
import FindMyRide from '../assets/findMyRide.jpeg';
import NoteTaker from '../assets/noteTaker.jpeg';
import PintPlanner from '../assets/pintPlanner.jpeg';
import TimedQuiz from '../assets/timedQuiz.jpeg';
import WorkdaySchedule from '../assets/workdayScheduler.jpeg';
import PlanTracker from '../assets/planTracker.jpeg';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-400">Work</p>
          <p className="py-6">//Check out some of my recent work</p>
        </div>
       
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* grid item */}
          <div style={{backgroundImage: `url(${PlanTracker})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a target= "_blank" href='https://plan-tracker-app.herokuapp.com/'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a target= "_blank" href='https://github.com/kpeazzoni/plan-tracker-app'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${FindMyRide})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white flex text-center tracking-wider px-6 mx-3 justify-center items-center">
                MySQL Handlebars Node.js Application
              </span>
              <div className="pt-8 text-center">
                <a target= "_blank" href='https://find-my-ride.herokuapp.com/'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a target= "_blank" href='https://github.com/kpeazzoni/find-my-ride'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${PintPlanner})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                REST API Application
              </span>
              <div className="pt-8 text-center">
                <a target= "_blank" href='https://cameliabenavides10.github.io/pintplanner/'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a target= "_blank" href='https://github.com/kpeazzoni/pintplanner'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${TimedQuiz})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white tracking-wider">
                JavaScript CSS HTML Application
              </span>
              <div className="pt-8 text-center">
                <a target= "_blank" href='https://kpeazzoni.github.io/The-Office-timed-quiz/'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a target= "_blank" href='https://github.com/kpeazzoni/The-Office-timed-quiz'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${WorkdaySchedule})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white flex text-center tracking-wider">
              HTML and CSS powered by jQuery JavaScript Application
              </span>
              <div className="pt-8 text-center">
                <a target= "_blank" href='https://kpeazzoni.github.io/Work-Day-Scheduler/'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a target= "_blank" href='https://github.com/kpeazzoni/Work-Day-Scheduler'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${NoteTaker})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-white flex text-center tracking-wider">
                Node.js Epress.js and JSON Data File Application
              </span>
              <div className="pt-8 text-center">
                <a target= "_blank" href='https://karens-note-taker.herokuapp.com/'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                </a>
                <a target= "_blank" href='https://github.com/kpeazzoni/Note-taker-express.js'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
