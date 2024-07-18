import React from "react";
import { FaGithub } from "react-icons/fa";

import BookHive from "../assets/portfolio/BookHive.png";
import Ochi from "../assets/portfolio/Ochi.png";
import portfolio from "../assets/portfolio/Portfolio.png";
import timetable from "../assets/portfolio/Timetable.png";
import bookmanagement from "../assets/portfolio/Web-Book.png";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: BookHive,
      title: "Global Book Finder",
      Plink:'https://github.com/TusharGosavi23/bookHive.git',
    },
    {
      id: 2,
      src: Ochi,
      title: "Ochi-Clone",
      Plink:'https://github.com/TusharGosavi23/Ochi-Clone.git',

    },
    {
      id: 3,
      src: portfolio,
      title: "Portfolio-website",
      Plink:'https://github.com/TusharGosavi23/bookHive.git',

    },
    {
      id: 4,
      src: timetable,
      title: "Timetable Generator",
      Plink:'https://github.com/TusharGosavi23/bookHive.git',

    },
    {
      id: 5,
      src: bookmanagement,
      title: "Book Management System",
      Plink:'https://github.com/TusharGosavi23/Web-Based-Book-Management-System.git',

    },
  ];

  return (
    <div
      name="portfolio"
      className="min-h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-20">
          <p className=" cursor-pointer text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title,Plink }) => (
            <div key={id} className="overflow-hidden shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="cursor-pointer object-cover rounded-md duration-200 hover:scale-105"
              />
              <p className="text-xl mt-2 px-3 py-3 text-center cursor-pointer hover:text-zinc-700">
                {title}
              </p>
              <div className="flex items-center justify-center">
                <div className="w-full flex justify-center m-4 duration-200 hover:scale-105 cursor-pointer">
                  <a href={Plink}>
                    <FaGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;