import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-green-500 bg-opacity-40 p-8 rounded">
              <p className="leading-relaxed mb-6 text-left">{testimonial.quote}</p>
                <div className="inline-flex">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-14 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white text-left">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-400 text-sm uppercase text-left">
                      {testimonial.company}
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