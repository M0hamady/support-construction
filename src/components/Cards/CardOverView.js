import React from "react";
import { Link } from "react-router-dom";
import CardOverViewAndImg from "./CardOverViewHistory";
import img2 from "assets/img/58052.jpg";
import img6 from "assets/img/19340.jpg";
import img7 from "assets/img/19318.jpg";
import overviewImg1 from "assets/img/welcomepage/overView1.jpg";
import overviewImg2 from "assets/img/welcomepage/overView2.jpeg";
import overviewImg3 from "assets/img/welcomepage/overView3.jpg";
import overviewImg4 from "assets/img/welcomepage/overView4.jpg";
import cardLanding from "assets/img/welcomepage/cardLanding.png";

export default function CardOverViewAndItenDescription() {

  return (
    <section className="mt-48 md:mt-40 pb-0 relative bg-blueGray-100 justify-right"
    >
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
      <div
        data-aos='fade-down '
        data-aos-mirror='true'
        className="container mx-auto text-left">
        <div
          className="flex flex-wrap items-center"
        >
          <div className="w-12/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
              <img
                alt="..."
                src={cardLanding}
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
                  Support construction
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  Working for Support construction means being part of a big family – one whose members share a common culture and a set of fundamental principles that shape the identity of our unique Group.
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
                      supporting your construct
                    </h6>
                    <p className="mb-4 text-center text-blueGray-500">
                      To help our employees advance in their careers, we endeavour to create an environment in which they can develop their employability and enhance their skills through support and training programmes.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0"></div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto text-left">
                    <h6 className="text-xl text-center mb-1 font-semibold">
                      2021
                    </h6>
                    <p className="mb-4 text-center text-blueGray-500">
                      2021 was a remarkable year in many respects. The Support Construction group returned to its growth momentum, as evidenced by its excellent results, and achieved or exceeded all its financial targets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos='fade-up'
        data-aos-mirror='true'
        className="container mx-auto overflow-hidden pb-40 mb-40 text-left">
        <div
          className="flex flex-wrap items-center"
        >
          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-sitemap text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Support Construction
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Tailored solutions for complexe requirements – welcome to your partner for international construction projects! The expert for large international construction projects is a subsidiary of Support Construction, a Egyptian technology group with alot of employees, and a leader in terms of both innovation and financial strength.rate your home like in your dream. you can dream with us.
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

          <div className="w-full md:w-5/12 px-[45px]  lg:px-4 mx-auto mt-32">
            <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <img
                alt="..."
                src={img2}
                className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
              />
              <img
                alt="..."
                src={overviewImg2}
                className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
              />
              <img
                alt="..."
                src={overviewImg1}
                className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
              />
              <img
                alt="..."
                src={overviewImg3}
                className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-25-px top-25-px"
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

      <div
        data-aos="fade-up"
        className="container mx-auto px-4 pb-32 pt-4 text-center">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto px-12 md:px-4 text-left">
            <div className="md:pr-12">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-file-alt text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">Support construction</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Saying the construction industry is large would be a gross understatement. As one of the oldest industries to date, construction has skyrocketed over the last thousands of years–and it keeps growing. Indeed, the global construction market is expected to grow to a massive $10.5 trillion by 2023. With this anticipated increase, today’s construction companies have their work cut out for them, to say the least. Beyond meeting our world’s most fundamental building needs, construction companies, large and small, are making a huge impact on our global economy.
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
              src={overviewImg4}
            />
          </div>
        </div>
      </div>

      <div
        data-aos="fade"
        className="justify-center text-center flex flex-wrap mt-24">
        <div className="w-full md:w-6/12 px-12 md:px-4">
          <h2 className="font-semibold text-4xl">Support construction</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            Support Construction —a leader in design-build construction projects in Egypt. Civil engineering | buildings | transport infrastructure.
          </p>
        </div>
      </div>
      <CardOverViewAndImg />
    </section>
  );
}
