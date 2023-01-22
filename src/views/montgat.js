import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  montagat,
  montagat_7elw,
  montagat_m5boz,
  url,
} from "../data/DataMontagat";

// components

import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import MontagatComponen from "components/montagat/MontagatComponen";
import CardEmployee from "components/Cards/CardEmployee";
import CardTank from "components/Cards/CardTank";
import CardContact from "components/Cards/CardContact";
import CardShe3ar from "components/Cards/CardShe3ar";
import CardGallary from "components/Cards/CardGallary";
import axios from "axios";

export default function Montgat() {
  const [itemsdata, setItemsdata] = useState(montagat);

  var config = {
    method: "get",
    url: url + "/website/montgat/",
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setItemsdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [500]);
  const allQesm = [...new Set(itemsdata.map((i) => i.qesm))];
  const filter_by_qesm = (categor) => {
    let newArr = [];
    newArr = itemsdata.filter((item) => item.qesm === categor);

    return newArr;
  };
  // const itemsdata =montagat
  // console.log(itemsdata)
  return (
    <>
      <Navbar transparent />
      <main>
        {/**kenburns-top for animation */}
        <div className="relative pt-16 pb-32 flex flex-wrap content-center items-center justify-center min-h-screen-75 ">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
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
                  <h1 className="text-white font-semibold text-5xl">
                    Support Construction{" "}
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
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
          console.log(filter_by_qesm(qesm));
          let color =
            allQesm.indexOf(qesm) + (1 % 1) === 0 ? "blueGray" : "white";
          console.log(color);
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
//  <MontagatComponen groubName="قسم الحلويات" montagat={montagat_7elw} sec_colo='white'/>
//  <MontagatComponen groubName="قسم المخبوز" montagat={montagat_m5boz} sec_colo='blueGray'/>
