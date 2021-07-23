import React from "react";
import { AcademicCapIcon, ThumbUpIcon, UsersIcon } from "@heroicons/react/solid";  
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Certifications
        </h1>
        <div className="flex flex-wrap m-4">
          {certifications.map((cert) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <AcademicCapIcon className="block w-8 text-gray-500 mb-4" />
                <div className="inline-flex items-center">
                  <img
                    alt="certification logo"
                    src={cert.image}
                    className="w-24 rounded-2xl flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {cert.certname}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {cert.issued}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}