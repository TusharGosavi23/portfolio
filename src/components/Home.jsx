import React from "react";
import Heroimage from "../assets/MY-image.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a skilled programmer in Java with a strong background in web development and computer science fundamentals. Proficient in
            HTML, CSS, and JavaScript, I specialize in building dynamic websites using React.js and Next.js. I'm passionate about crafting user-centric solutions and contributing to innovative projects. Eager to leverage my expertise in a collaborative environment that fosters
            learning and growth.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2 mt-8 md:mt-0">
          <img
            className="rounded-full w-1/2 mb-40 md:w-auto max-w-xs mt-5 "
            src={Heroimage}
            alt="myImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
