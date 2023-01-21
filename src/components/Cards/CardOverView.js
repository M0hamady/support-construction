import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardOverViewAndImg from "./CardOverViewHistory";
import img2 from "assets/img/58052.jpg";
import img6 from "assets/img/19340.jpg";
import img7 from "assets/img/19318.jpg";
import axios from "axios";
import { local } from "data/DataMontagat";
import { url } from "data/DataMontagat";
export default function CardOverViewAndItenDescription() {
  const [data, setdata] = useState({});
  useEffect(() => {
    let config = {
      method: "get",
      url: url + "website/",
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
    <section className="mt-48 md:mt-40 pb-0 relative bg-blueGray-100 justify-right">
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
            className="text-blueGray-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto text-left">
        <div
          className="flex flex-wrap items-center"
          // style={{ flexDirection: "row-reverse" }}
        >
          <div className="w-12/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
              <img
                alt="..."
                // src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                src={data.pic_team}
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-2">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-lightBlue-500 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  {data.title_team}
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  {data.description_team}
                </p>
              </blockquote>
            </div>
          </div>
          {/**  need for tem pic in good reselution  */}
          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto text-left">
                    <h6 className="text-xl text-center mb-1 font-semibold">
                      {data.team_first_title}{" "}
                    </h6>
                    <p className="mb-4 text-center text-blueGray-500">
                      {data.team_first_description}
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0"></div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto text-left">
                    <h6 className="text-xl text-center mb-1 font-semibold">
                      {data.team_seconed_title}
                    </h6>
                    <p className="mb-4 text-center text-blueGray-500">
                      {data.team_seconed_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto overflow-hidden pb-40 mb-40 text-left">
        <div
          className="flex flex-wrap items-center"
          // style={{ flexDirection: "row-reverse" }}
        >
          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-sitemap text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              {data.company_title}
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              {data.company_description}
            </p>
            <div className="block pb-6">
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                Decorations
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                Plumbing
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                electricity
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                smart electricity
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                lighting
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                Swimming pool
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                gardens
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                Marbling
              </span>
            </div>
            <Link
              to={"/shop"}
              className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
            >
              Support construction{" "}
              <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </Link>
          </div>

          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
            <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <img
                alt="..."
                src={img2}
                className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
              />
              <img
                alt="..."
                src={data.pic_company_3}
                className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
              />
              <img
                alt="..."
                src={data.pic_company_2}
                className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
              />
              <img
                alt="..."
                src={data.pic_company_1}
                className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
              />
              <img
                alt="..."
                src={img6}
                className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
              />
              <img
                alt="..."
                src={img7}
                className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-32 pt-4 text-center">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div className="md:pr-12">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-file-alt text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">{data.customer_title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                {data.customer_description}
              </p>
            </div>
          </div>

          <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-xl"
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
              src={data.pic_customer_1}
            />
          </div>
        </div>
      </div>

      <div className="justify-center text-center flex flex-wrap mt-24">
        <div className="w-full md:w-6/12 px-12 md:px-4">
          <h2 className="font-semibold text-4xl">{data.company_words_title}</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
          {data.company_words_description}
          </p>
        </div>
      </div>
      <CardOverViewAndImg />
    </section>
  );
}
