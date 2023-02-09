import React from "react";
import { Link } from "react-router-dom";

export default function CardOverViewHistory() {

  return (
    <section
      className="block relative z-1 bg-blueGray-600 "
      style={{ marginTop: "150px" }}
    >
      <div className="container mx-auto">
        <div className="justify-center flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4  -mt-24">
            <div className="flex flex-wrap">
              <div
                data-aos="slide-down"
                data-aos-duration="1000"
                className="w-full lg:w-4/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  Our startup
                </h5>
                <Link to="/auth/login">
                  <div className=" relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={"https://octopus-app-8uosp.ondigitalocean.app/media/ImagIndex/23/apout1_38uFScg.jpg"}
                    />
                  </div>
                </Link>
              </div>

              <div
                data-aos="slide-down"
                data-aos-duration="1000"
                className="w-full lg:w-4/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  with some employed
                </h5>
                <Link to="/profile">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={"https://octopus-app-8uosp.ondigitalocean.app/media/ImagIndex/23/about4_Raxu6a5.jpg"}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </Link>
              </div>

              <div
                data-aos="slide-down"
                data-aos-duration="1000"
                className="w-full lg:w-4/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  While working
                </h5>
                <Link to="/landing">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={"https://octopus-app-8uosp.ondigitalocean.app/media/ImagIndex/apout1.jpg"}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
