import axios from "axios";
import Card_project from "components/Cards/Card_project";
import { Card_project_img } from "components/Cards/Card_project";
import { Card_project_moshatarayat } from "components/Cards/Card_project_moshtarayt";
import { url } from "data/DataMontagat";
import { Allproject_steps } from "data/DataProject";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Project() {
  const id = useParams()?.id;
  const [project, setproject] = useState({});
  const [token, settoken] = useState(
    () => "Token " + localStorage.token.slice(1, localStorage.token.length - 1)
  );
  let config = {
    method: "get",
    url: url + `project/`,
    headers: {
      Authorization: token,
    },
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setproject(response.data[(id - 1)]);
      })
      .catch(function (error) {
        console.log("error");
      });
  }, []);

  const steps = Allproject_steps(id);
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
                    <span className="fas fa fa-house-user"></span>{" "}
                    {project.ownerName}
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
                      <i className="fas fa-solid fa-compass-drafting"></i>{" "}
                      project designer
                    </a>
                    <span
                      className="fas fa fa-forward pl-4 "
                      style={{ color: "rgba(59, 130, 246, 0.9)" }}
                    ></span>
                  </h4>
                  <div className="flex felx-wrap justify-between">
                    {" "}
                    <Link
                      to={`/step/create/${id}`}
                      className={
                        " p-3 text-center inline-flex items-center justify-center w-4 h-4 shadow-lg rounded-full "
                      }
                      style={{
                        backgroundColor: "#f8f8f878",
                      }}
                    >
                      <i className="fas fa-solid fa-plus"></i>
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
          <ul className="timeline">
            {steps.map((step) => {
              const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ];
              const d = new Date(step.created_at.slice(0, 10));
              const start_at =
                step.start_at != null
                  ? new Date(step.start_at.slice(0, 10))
                  : new Date();
              const finished_at =
                step.finished_at != null
                  ? new Date(step.finished_at.slice(0, 10))
                  : new Date();
              let difference = finished_at.getTime() - start_at.getTime();
              difference =
                difference / (1000 * 3600 * 24) < 0
                  ? 0
                  : difference / (1000 * 3600 * 24);
              let month = months[d.getMonth()];
              // console.log(difference, 6666666666);
              return (
                <li
                  className="timeline-item bg-white rounded ml-3 p-4 shadow"
                  key={Math.random() * 100}
                >
                  <div className="timeline-arrow"></div>
                  <h2 className="h5 mb-0">{step.name}</h2>
                  <div className="small text-gray justify-between flex  ">
                    {/** <i className="fa fa-clock-o mr-1 "> {d.getDate().toString() + ' - '+month+ ' - '+d.getFullYear().toString()+' At: '+ d.getHours()+':'+d.getMinutes()}</i> */}
                    <i className="fa fa-clock-o mr-1 ">
                      {" "}
                      start at: {step.start_at}{" "}
                      {step.is_finished ? (
                        <i
                          className="fas fa-solid  fa-circle-check ml-4"
                          style={{ Color: "rgb(6 79 50)" }}
                        ></i>
                      ) : (
                        ""
                      )}
                    </i>
                    <div
                      className="flex justify-between "
                      style={{ width: "80px" }}
                    >
                      <Link
                        to={`/step/update/${step.id}`}
                        className={
                          " p-4 text-center inline-flex items-center justify-center w-4 h-4 shadow-lg rounded-full "
                        }
                        style={{
                          backgroundColor: `${step.is_finished ? "#15e291" : "#f8f8f878"
                            }`,
                        }}
                      >
                        <i className="fas fa-solid fa-user-pen "></i>
                      </Link>
                      <Link
                        to={`/moshtrayat/create/${step.id}`}
                        className={
                          " p-3 text-center inline-flex items-center justify-center w-4 h-4 shadow-lg rounded-full "
                        }
                        style={{
                          backgroundColor: `${step.is_finished ? "#15e291" : "#f8f8f878"
                            }`,
                        }}
                      >
                        <i className="fas fa-solid fa-plus"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-wrap">
                    <div className="mt-4">
                      <Card_project
                        statSubtitle="step:"
                        statTitle="title"
                        statArrow="up"
                        statPercent="25-5-2018"
                        state_cost={step.costs}
                        state_days={difference}
                        statPercentColor="text-emerald-500"
                        statDescripiron="Since last month"
                        statIconName="fas fa fa-clock"
                        statIconColor="bg-red-500"
                      />
                    </div>
                    <div className="mt-4">
                      <Card_project_img
                        statTitle="images"
                        statDescripiron="Since last month"
                        statIconName="fas fa fa-image   "
                        statIconColor="bg-red-500 "
                      />
                    </div>
                    <div className="mt-4 w-full">
                      <Card_project_moshatarayat
                        statTitle="moshatarat"
                        statDescripiron="Since last month"
                        statIconName="fas fa fa-basket-shopping"
                        statIconColor="bg-red-500"
                        moshtarayat={step.moshtryat}
                        stepID={step.project}
                        cost={step.cost}
                      />
                    </div>
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
