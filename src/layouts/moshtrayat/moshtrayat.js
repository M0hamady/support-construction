import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Create_moshtrayat from "./Create_moshtrayat";
import UpdateMoshatr from "./UpdateMoshatr";
import Usermoshtrayat from "./UserMoshtra";
// http://localhost:3000/project/6/
export default function moshtrayat() {
  return (
    <div className="container py-0">
      <div className="row flex text-center text-black mb-2 justify-center ">
        <div className=" ">
          <div className="content-card">
            <div className="card-big-shadow">
              <div
                className="card card-just-text"
                data-background="color"
                data-color="blue"
                data-radius="none"
              >
                <div className="content">
                  <h6 className="category">
                    <span className="fas fa fa-house-user"></span> oroject owner
                    <span
                      className="fas fa fa-forward pl-4 "
                      style={{ color: "rgba(59, 130, 246, 0.9)" }}
                    ></span>
                  </h6>
                  <h4 className="title">
                    <a href="#">
                      <i className="fas fa fa-helmet-safety"></i> project eng
                      <span
                        className="fas fa fa-forward pl-4 "
                        style={{ color: "rgba(59, 130, 246, 0.9)" }}
                      ></span>
                    </a>
                  </h4>
                  <h4 className="title">
                    <a href="#">
                      {" "}
                      <i className="fas fa-solid fa-compass-drafting"></i> project
                      designer
                    </a>
                    <span
                      className="fas fa fa-forward pl-4 "
                      style={{ color: "rgba(59, 130, 246, 0.9)" }}
                    ></span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**routing in moshtrayat */}
      
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <ul className="timeline">
            <li
              className="timeline-item bg-white rounded ml-3 p-4 shadow"
              style={{ width: "90c%" }}
            >
              <div className="flex  rounded shadow border border-success font-bold text-white  border-0 border-left-0">
                <div className="w-50 h-50  p-2 m-0 bg-white rounded-left text-gray">
                  <h6>Project</h6>
                  <h4>step name</h4>
                </div>
                <div className="w-full h-50 p-2 m-0 flex flex-wrap justify-between rounded-right ">
                  <h2 className="p-2">
                    Price: 50 <small>LE</small>
                  </h2>
                  <button className="btn rounded bg-white font-bold w-100 h-8 pr-4 pl-4 text-gray m-2">
                    ENg Approve
                  </button>
                  <button className="btn rounded bg-white font-bold w-100 h-8 pr-4 pl-4 text-gray m-2">
                    Countant Approve
                  </button>
                  <button className="btn rounded bg-white font-bold w-100 h-8 pr-4 pl-4 text-gray m-2">
                    MAnager Approve
                  </button>
                  <button className="btn rounded bg-white font-bold w-100 h-8 pr-4 pl-4 text-gray m-2">
                    toclient
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
