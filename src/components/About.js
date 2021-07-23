import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mike.<br />
            <br className="hidden lg:inline-block" />Full Stack Digital Marketer. <br /> Marketing Operations and Data Analyst.<br />Code Proficient.

          </h1>
          <p className="mb-8 leading-relaxed">
          Head of Marketing | Global B2B Full Stack Marketer | B2B Demand Generation
          </p>
          <p className="mb-8 leading-relaxed">
          Live now; make now always the most precious time. Now will never come again. 
          Genius doesn't work on an assembly line basis. 
          Did Einstein, Kazanga or Sitar of Vulcan produce new and revolutionary theories on a regular schedule? 
          You can't simply say, 'Today I will be brilliant.' Compassion: that's the one things no machine ever had. 
          Maybe it's the one thing that keeps men ahead of them. 
          Curious, how often you humans manage to obtain that which you do not want. 
          It's hard to believe that something which is neither seen nor felt can do so much harm.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}