import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
            <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-teal-400">
                    About
                </p>
            </div>
            <div></div>
            </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
                <p>Hi. I'm Karen, nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p>I have just completed an intensive software development boot camp from The University of Texas, Austin mid-March. I learned how to develop real-world full-stack applications. Through this experience, I have discovered that I like seeing the big picture come to completion from front-end to back-end. I love working with others to troubleshoot code and help solve problems. </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
