import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <br className="hidden lg:inline-block" />Hi, I'm Mike.<br />
            <br className="hidden lg:inline-block" />Technical Project Manager<br />
            <br className="hidden lg:inline-block" />Process Improvement (Workflow) Analyst.<br />
            <br className="hidden lg:inline-block" />Code & AI Proficient.<br />
          </h1>
          <p className="mb-8 leading-relaxed text-green-600 text-lg">
          Project Management Professsional (PMP)<br />
          ServiceNow Certified System Administrator (CSA)<br />
          ServiceNow Certified Implementation Specialist - IT Service Management (CIS - ITSM) - <i>In progress</i>
          </p>
          <p className="mb-8 leading-7 italic font-light text-2xl" lin>
          Seize the time... Live now! Make now always the most precious time. Now will never come again.<br />
          <span className="text-base">-Jean Luc Picard</span>
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