import { ArrowRightIcon, CursorClickIcon, KeyIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Mike Anthony
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Apps & Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#certifications" className="mr-5 hover:text-white">
            Certifications
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
          <a href="https://www.linkedin.com/in/mikeeanthony/" className="mr-5 hover:text-white" target="_blank">
            LinkedIn
          </a>
        </nav>
        <a
          href="#contact"
          //className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mt-2">
          Work With Me
          <CursorClickIcon className="w-4 h-4 ml-1"/>
        </a>
      </div>
    </header>
  );
}