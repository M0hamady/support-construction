import React from "react";
import { Link } from "react-router-dom";

export default function CardOverviewAnImageWithDescrAndpoints() {

  return (
    <section
      data-aos='fade-up'
      data-aos-mirror='true'
      className="pb-16 bg-blueGray-200 relative pt-32">
      <div
        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
          <div className="w-full text-center lg:w-8/12">
            <p className="text-4xl text-center">
              <span role="img" aria-label="love">
                TECHNICAL OFFICE DIRECTOR {" "}
              </span>
              <h1>Ahmed elkorashi</h1>
            </p>
            <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              I am part of the company which has contributed in the development of a country with 38 million people.
            </p>
            <div className="sm:block flex flex-col mt-10">
              <Link
                to={"/shop"}
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                <i className="fas fa-briefcase text-lg mr-1"></i>
                Our projects
              </Link>
              <Link
                to={"/shop"}
                className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                <i className="fas fa-phone text-lg mr-1"></i>
                <span> Contatc</span>
              </Link>
            </div>
            <div className="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
