import React from "react";

export default function CardTank() {
  return (
    <section className="pb-20 relative block bg-blueGray-800">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
            className="text-blueGray-800 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2
              data-aos="fade"
              className="text-4xl font-semibold text-white">Thankful</h2>
            <p
              data-aos="fade-up"
              className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
              You have made this project possible with your hard work.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-medal text-xl"></i>
            </div>
            <h6
              data-aos="fade-in"
              className="text-xl mt-5 font-semibold text-white">
              Employee Say
            </h6>
            <p
              data-aos="fade-up"
              className="mt-2 mb-4 text-blueGray-400">
              The best part of being a member of the Construction team is
              knowing that in my hands is the possibility of changing the world.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-poll text-xl"></i>
            </div>
            <h5
              data-aos="fade-up"
              className="text-xl mt-5 font-semibold text-white">
              our numbers
            </h5>
            <p
              data-aos="fade-up"
              className="mt-2 mb-4 text-blueGray-400">
              2021 was the best year we provided our services ,and 2022 is going
              to be one of the best.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-lightbulb text-xl"></i>
            </div>
            <h5
              data-aos="fade-up"
              className="text-xl mt-5 font-semibold text-white">
              Best ideas
            </h5>
            <p
              data-aos="fade-up"
              className="mt-2 mb-4 text-blueGray-400">
              is being one of our clients to descover it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
