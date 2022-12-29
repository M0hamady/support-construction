import React from "react";

export default function CardShe3ar({ children }) {
  return (
    <section className="pb-20 bg-blueGray-200 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center hover:-mt-4 ease-linear transition-all duration-150">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto ">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <i className="fas fa-award"></i>
                </div>
                <h6 className="text-xl font-semibold">
                  sustainability strategy 2030
                </h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Respect for the environment and striving to support
                  responsible social development are behind all of our actions
                  and our commitments.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center hover:-mt-4 ease-linear transition-all duration-150">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg ">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                  <i className="fas fa-retweet"></i>
                </div>
                <h6 className="text-xl font-semibold">
                  Committed to the SDG’s{" "}
                </h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Respect for the environment and striving to support
                  responsible social development are behind all of our actions
                  and our commitments.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center hover:-mt-4 ease-linear transition-all duration-150">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                  <i className="fas fa-fingerprint"></i>
                </div>
                <h6 className="text-xl font-semibold ">
                  Health and Safety Strategy
                </h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Empowering a broader group of people in the creation process
                  so they are more efficient, resilient and frictionless in
                  their application
                </p>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}
