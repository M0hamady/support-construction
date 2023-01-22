import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "assets/img/construc1.png";
import axios from "axios";
import { local } from "data/DataMontagat";
import { url } from "data/DataMontagat";
export default function CardLanding() {
  const [data, setdata] = useState({});
  useEffect(() => {
    let config = {
      method: "get",
      url: url + "website/website",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setdata(response.data[0]);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [1000]);
  return (
    <section
      className="header relative pt-16  items-center flex h-screen max-h-860-px text-right particle-canvas  "
      style={{
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(202deg, rgba(2,0,36,1) 0%, rgba(8,130,127,1) 10%, rgba(8,126,122,1) 20%, rgba(9,121,114,1) 29%, rgba(0,212,255,1) 96%)",
      }}
    >
      <div className="container mx-auto items-center flex flex-wrap bg-pan-top">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-white opacity-100 focus-in-expand ">
              {data.title_welcome ? data.title_welcome : "Support construction"}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white opacity-90 font-bold focus-in-expand ">
              Welcome to our site. {"\n "}
              <a
                // href="https://tailwindcss.com/?ref=creativetim"
                className="text-blueGray-600"
                // target="_blank"
              >
                {data.title_welcome ? data.title_welcome : "thanx for you"}
                {"\n "}
              </a>
              {data.description_welcome
                ? data.description_welcome
                : "wekcome to our site"}
            </p>
            <div className="mt-12">
              <Link
                to="/shop"
                className="get-started text-white font-bold px-6 py-4 text-pop-up-top rounded outline-none focus:outline-none mr-1 mb-1   bg-blueGray-700 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Our projects
                {/** go to gallary */}
              </Link>
              <Link
                to="/book"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                // target="_blank"
              >
                book
              </Link>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 mt-48 sm:mt-5 w-10/12 max-h-860px while-mobile text-focus-in "
        style={{
          marginTop: "30px",
        }}
        cl
        src={data.pic_welcom}
        alt="..."
      />
    </section>
  );
}
