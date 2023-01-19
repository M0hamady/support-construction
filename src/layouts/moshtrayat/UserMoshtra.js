import axios from "axios";
import { url } from "data/DataMontagat";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
// http://localhost:3000/project/6/
export default function UpdateMoshtrayt() {
  const [moshtrayat, setMoshtrayat] = useState([]);
  const id = useParams().id;
  // console.log(id);
  let config = {
    method: "get",
    url: url + `project/${id}/`,
    headers: {},
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(response.data.mosh, "from axios");
        setMoshtrayat(response.data.mosh_detail);
        console.log("done state");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
                    <Link to={`/project/${id}`}>
                      {" "}
                      <i className="fas fa-solid fa-compass-drafting"></i>{" "}
                      project
                    </Link>
                    <span
                      className="fas fa fa-forward pl-4 "
                      style={{ color: "rgba(59, 130, 246, 0.9)" }}
                    ></span>
                  </h4>
                  <div className="flex justify-between">
                    <Link
                      to={`/project/${id}`}
                      className={
                        " p-3 text-center inline-flex items-center justify-center w-4 h-4 shadow-lg rounded-full "
                      }
                      style={{
                        backgroundColor: "#f8f8f878",
                      }}
                    >
                      <i className="fas fa-solid fa-backward"></i>
                    </Link>
                    <Link
                      to={`/admin/projects`}
                      className={
                        " p-3 text-center inline-flex items-center justify-center w-4 h-4 shadow-lg rounded-full "
                      }
                      style={{
                        backgroundColor: "#f8f8f878",
                      }}
                    >
                      <i className="fas fa-solid fa-home"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-7 mx-auto">
          <ul className="timeline ">
            {moshtrayat.map((item) => {
              return (
                <li
                  key={Math.random() * 100}
                  className="timeline-item bg-white rounded ml-3 p-4 shadow"
                  style={{ width: "90%" }}
                >
                  <div
                    className="flex  rounded shadow border border-success font-bold text-white  border-0 border-left-0 "
                    style={{ overflow: "auto" }}
                  >
                    <div
                      className=" h-50  p-2 m-0 bg-white rounded-left text-gray"
                      style={{ width: "120px" }}
                    >
                      <h6
                        className="tex-xs"
                        style={{ fontSize: "16px", width: "110px" }}
                      >
                        {item.step_name}
                      </h6>
                      <h6
                        className="tex-xs"
                        style={{ fontSize: "16px", width: "110px" }}
                      >
                        {item.cost}
                      </h6>
                    </div>
                    {item.moshtrayat.map((mosh_items) => {
                      return (
                        <div className=" h-50 p-2 m-0 flex flex-wrap justify-between rounded-right ">
                          <h5
                            className="p-1"
                            style={{ width: "100px", fontSize: "13px" }}
                          >
                            {mosh_items.name}
                          </h5>
                          <h2 className="">
                            Price: {mosh_items.cost} <small>LE</small>
                            <i className="pl-2 ml-2   fas fa-light fa-sack-dollar"></i>
                          </h2>
                        </div>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
