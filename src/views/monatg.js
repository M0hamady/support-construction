import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Link, useParams } from "react-router-dom";
import { GetExactMontag } from "data/DataMontagat";
import { exact_Meet } from "data/DataVisitors";

export default function Montag() {
   const data = allVisitors();

  const id =parseInt( useParams().id)
  const meeting =exact_Meet(data,id)

  const montag =GetExactMontag(id)  
  console.log(montag,55555555,id);
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block" style={{ height: "150px" }}>
          {<div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              pgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>}
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
                className="text-slate-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative  bg-slate-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
              <div className="px-2 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/team-2-800x800.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4  lg:order-3 lg:text-right lg:self-center">
                    <div className="py-0 px-3 mt-32 sm:mt-0"></div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                          ...
                        </span>
                        <span className="text-sm text-slate-400">طلب</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                          ...
                        </span>
                        <span className="text-sm text-slate-400">اعجاب</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                          ...
                        </span>
                        <span className="text-sm text-slate-400">تحسين</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-700 mb-2">
                  name:{montag ? montag.name:'no name'}
                  </h3>
                  <h2 className="text-xl font-bold " style={{color:'rgb(12 66 236)'}}>{montag?montag.price :"." } LE</h2>

                  <div className="text-sm leading-normal mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-400"></i>{" "}
                    {montag ?montag.locaف:"no location"}
                  </div>
                  <div className="mb-2 text-slate-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-slate-400"></i>
                    {montag ? montag.shop: "not in shop"}

                  </div>
                  <div className="mb-2 text-slate-600">
                    <i className="fas fa-university mr-2 text-lg text-slate-400"></i>
                    {montag ? montag.qesm: "not in qesm"}

                  </div>
                  <Link
                    className="bg-sky-500 p-5 mt-5  active:bg-sky-600 uppercase text-white font-bold hover:shadow-md shadow text-x px-6 py-2 rounded   ease-linear transition-all duration-150"
                    type="button"
                    to={"/shop"}
                  >
                    الرجوع
                  </Link>
                  <Link
                    className="bg-sky-500 p-5 mt-5 ml-2 active:bg-sky-600 uppercase text-white font-bold hover:shadow-md shadow text-x px-6 py-2 rounded   ease-linear transition-all duration-150"
                    type="button"
                    to={"/first_step"}
                  >
                    طلب
                  </Link>
                </div>
                <div className="mt-10 py-10 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-slate-700">
                        {montag ? montag.discription : 'المعروض'}
                      </p>
                      <Link
                        to={"/first_step"}
                        className="font-normal text-sky-500"
                      >
                        طلب المنتج
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
