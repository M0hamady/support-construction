import React from "react";
import {
  montagat,
} from "../data/DataMontagat";
import summaryImg from "assets/img/summaryCover.avif";
// components

import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import MontagatComponen from "components/montagat/MontagatComponen";
import CardEmployee from "components/Cards/CardEmployee";
import CardTank from "components/Cards/CardTank";
import CardContact from "components/Cards/CardContact";
import CardShe3ar from "components/Cards/CardShe3ar";
import CardGallary from "components/Cards/CardGallary";

export default function Montgat() {

  const allQesm = [...new Set(montagat.map((i) => i.qesm))];
  const filter_by_qesm = (categor) => {
    let newArr = [];
    newArr = montagat.filter((item) => item.qesm === categor);

    return newArr;
  };

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex flex-wrap content-center items-center justify-center min-h-screen-75 ">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover "
            style={{
              backgroundImage:
                `url(${summaryImg})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12 ">
                  <h1
                    data-aos="fade"
                    className="text-white font-semibold text-5xl">
                    Support Construction{" "}
                  </h1>
                  <p
                    data-aos="fade-up"
                    className="mt-4 text-lg text-blueGray-200">
                    One of our most distinguishing characteristics is our
                    commitment to society. Accordingly, we are committed to
                    Corporate Responsibility, best practices in Quality and the
                    Environment, and the advancement of Innovation. We provide
                    services to large communities by promoting socio-economic
                    development, helping improve people’s living standards and
                    contributing to their development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
        </div>

        <CardShe3ar />

        {allQesm.map((qesm) => {

          let color =
            allQesm.indexOf(qesm) + (1 % 1) === 0 ? "blueGray" : "white";

          return (
            <MontagatComponen
              key={Math.random() * 100}
              groubName={qesm}
              montagat={filter_by_qesm(qesm)}
              sec_colo={color}
            />
          );
        })}
        <CardGallary />
        <CardEmployee />

        <CardTank />

        <CardContact />
      </main>
      <Footer />
    </>
  );
}
