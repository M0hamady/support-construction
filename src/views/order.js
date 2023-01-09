import React, { useState } from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Link, useParams } from "react-router-dom";
import { Change_success_stat } from "data/DataVisitors";
import { AddPartment } from "data/DataVisitors";
import { ProjectData } from "data/DataProject";
import { AllVisitors } from "data/DataVisitors";
import { Exact_Meet } from "data/DataVisitors";
import { Change_accepted_stat } from "data/DataVisitors";
// import { emerald } from "tailwindcss/colors";

export default function Order({ order_num, price, locat, date, component }) {
  const id = useParams().id;
  const data = AllVisitors();
  const meeting = Exact_Meet(data, id);
  console.log(meeting);
  // const project = (val) => ProjectData(val).name;
  function changeTounsUcced(state) {
    Change_success_stat(id.toString(), state);
    window.location.reload();
  }
  function changeTouaccepted(state) {
    Change_accepted_stat(id.toString(), state);
    window.location.reload();
  }
  const [steps, setSteps] = useState(0);
  function show_step() {
    document.getElementById("num-Step").style.visibility = "visible";
    document.getElementById("num-Step2").style.visibility = "visible";
  }
  function createPartment() {
    AddPartment(steps, id);
  }
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block" style={{ height: "150px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
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
                className="text-slate-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative  bg-slate-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-xl rounded-lg ">
              <div className="px-2 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    {/*<div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/team-2-800x800.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-200-px"
                      />
          </div> */}
                  </div>
                  <div className="w-full lg:w-4/12 px-4  lg:order-3 lg:text-right lg:self-center">
                    <div className="py-0 px-3 mt-5 sm:mt-0">
                      {" "}
                      <Link
                        to={`/admin/meatings`}
                        className={
                          " p-3 text-center inline-flex items-center justify-center w-4 h-4 shadow-lg mt-4 rounded-full "
                        }
                        style={{
                          backgroundColor: "#f8f8f878",
                          transform: "translateY(15px)",
                        }}
                      >
                        <i className="fas fa-solid fa-home"></i>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="w-full  lg:w-4/12 px-4 lg:order-1"
                    style={{ maxWidth: "400px" }}
                  >
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-x w100 font-bold block uppercase tracking-wide text-slate-600">
                          Date Of create
                        </span>
                        <span
                          className=" text-slate bold-400 w100"
                          style={{ fontSize: "12px" }}
                        >
                          {meeting.created_at}
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-x w100 font-bold block uppercase tracking-wide text-slate-600 ">
                          {meeting.is_accepted ? "accepted" : "need acception"}
                        </span>
                        <span className="text-sm text-slate-400">
                          {meeting.is_accepted ? (
                            <button
                              className="fas fa-solid fa-check text-xl"
                              style={{ color: "#0ee3ae" }}
                              onClick={() => changeTouaccepted("False")}
                            />
                          ) : (
                            <button
                              className="fas fa-solid fa-xmark text-xl"
                              onClick={() => changeTouaccepted("True")}
                            >
                              check
                            </button>
                          )}
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-x w100 font-bold block uppercase tracking-wide text-slate-600">
                          {meeting.is_success ? "succeded" : "un success"}
                        </span>
                        <span className="text-sm text-slate-400">
                          {meeting.is_success ? (
                            <button
                              className="fas fa-solid fa-check  text-xl"
                              style={{ color: "#0ee3ae" }}
                              onClick={() => changeTounsUcced("False")}
                            />
                          ) : (
                            <button
                              className="fas fa-solid fa-xmark text-xl"
                              onClick={() => changeTounsUcced("True")}
                            >
                              check
                            </button>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-0">
                  <h3 className="text-4xl font-semibold leading-normal mb-1 text-slate-700 ">
                    <small>Meating with {meeting.name} </small>
                  </h3>
                  <i className="fas fa-regular fa-calendar-days"></i>
                  <h2
                    className="text-xl font-bold "
                    style={{ color: "rgb(12 66 236)" }}
                  >
                    {meeting.meet_at} at {meeting.meet_time}
                  </h2>
                  <a
                    className="p-2 text-xl m-4 font-bold"
                    href={`tel:${meeting.number}`}
                  >
                    {meeting.number}
                    <i className="fas fa-solid fa-phone ml-2 text-xl "></i>
                  </a>
                  <div className="text-sm  leading-normal mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-400"></i>{" "}
                    {meeting.location}
                  </div>
                  <div className="mb-2 text-slate-600 mt-0">
                    <i className="fas fa-briefcase mr-2 text-lg text-slate-400"></i>
                    Support Construction
                  </div>

                  <div className="block pb-6"></div>
                </div>
                <button
                  // to={"/admin/tables"}
                  onClick={() => show_step()}
                  className="bg-gray-600 p-2 rounded mt-1 text-black shadow"
                >
                  Create project
                  <i className="fas ml-2 fa-solid fa-building"></i>
                </button>
                <div className="mt-10 py-10 border-t border-slate-200 text-center">
                  <h2 className="font-bold ">
                    {" "}
                    Create project with some steps
                  </h2>
                  <input
                    className="p-2 text-center  "
                    style={{ visibility: "hidden" }}
                    id="num-Step"
                    onChange={(e) => setSteps(e.target.value)}
                    placeholder="how many steps?"
                  />

                  <button
                    className="btn btn-brimary text-black"
                    style={{ visibility: "hidden" }}
                    id="num-Step2"
                    onClick={() => createPartment()}
                  >
                    create
                  </button>
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-slate-700">
                        {/**
                      future part for description
                      
                      */}
                      </p>
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
