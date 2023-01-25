import axios from "axios";
import { url } from "data/DataMontagat";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
{
  /* get num 
        tmie
        location wait untill performing
        or call us directilly
    */
}
export default function UpdateStep() {
  // id of step to create
  const [Name, setName] = useState("");
  const [finished_at, setFinished_at] = useState("");
  const [is_finished, setIs_finished] = useState(false);
  const [start_at, setstart_at] = useState("");
  //   const [cost, setCoste] = useState(0);
  const [idproj, setidproj] = useState(useParams().id);
  const [id, setId] = useState(useParams().id);
  let data = new FormData();
  let config = {
    method: "get",
    url: `http://127.0.0.1:8000/project/astep/${id}/`,
    headers: {
      ...data.getHeaders,
    },
    data: data,
  };
  useEffect(() => {
    console.log(5);
    axios(config)
      .then(function (response) {
        console.log(response.data, "res", id);
        setName(response.data.name);
        setIs_finished(response.data.is_finished);
        setstart_at(response.data.start_at);
        setFinished_at(response.data.finished_at.slice(0, 10));
      })
      .catch(function (error) {
        console.log("error");
      });

    return () => {};
  }, [1000]);
  // console.log(start_at, "start");
  // console.log(finished_at, "end");
  // console.log(is_finished, "is_finished");
  // console.log(Name, "end");
  const confirm = () => {
    data.append("start_at", start_at);
    data.append("name", Name);
    data.append("finished_at", finished_at);
    data.append("is_finished", is_finished);
    // data.append("cost", cost);
    let config = {
      method: "put",
      url: `http://127.0.0.1:8000/project/astep/${id}/`,
      headers: {
        ...data.getHeaders,
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        document.getElementById("add").style.content = "update again";
        document.getElementById("project").style.display = "block";
        console.log(response.data.projectid);
        setidproj(response.data.projectid);
      })
      .catch(function (error) {
        console.log("error");
      });
  };
  function addNext() {
    confirm();
  }

  return (
    <div className="flex m-4 w-full  flex-row  flex-wrap hall-container">
      <div
        className="container-item flexjustify-center rounded "
        id="first"
        style={{ minWidth: "300px", maxHeight: "600px" }}
      >
        <h1>
          Step name.
          <div className="flex justify-between " style={{ width: "90px" }}>
            <Link
              to={`/project/${idproj}`}
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
                " p-3 mr-1 text-center inline-flex items-center justify-center w-4 h-4 shadow-lg rounded-full "
              }
              style={{
                backgroundColor: "#f8f8f878",
              }}
            >
              <i className="fas fa-solid fa-home"></i>
            </Link>
          </div>
        </h1>
        <div className="input-group mb-3 flex flex-wrap flex-column m-2 justify-center">
          <div className="input-group-prepend m-2 text-lg ">
            <input
              type="text"
              className="form-control rounded my-input"
              placeholder="Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              style={{ minWidth: "300px", transition: "0.6" }}
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-check flex">
            <input
              className="form-check-input mt-1"
              type="checkbox"
              id="flexCheckDefault"
              value={is_finished ? "False" : "False"}
              checked={is_finished ? true : false}
              onChange={(e) => setIs_finished(e.target.value)}
            />
            <label className="form-check-label checked " for="flexCheckDefault">
              Is finished
            </label>
          </div>

          <div className="input-group-prepend  m-2 text-lg ">
            <div className="flex flex-wrap justify-center">
              <div className="input-group-prepend">
                <span className="input-group-text " id="">
                  <h4 style={{ width: "80px" }}>from to</h4>
                </span>
              </div>
              <input
                type="date"
                className="form-control rounded"
                value={start_at}
                onChange={(e) => setstart_at(e.target.value)}
              />
              <i className="fa-solid fa-clock mr-2"></i>
              <input
                type="date"
                className="form-control rounded"
                value={finished_at.slice(0, 12)}
                onChange={(e) => setFinished_at(e.target.value)}
              />
            </div>
          </div>
          {/** <input
            type="tel"
            className="form-control rounded text-lg font-bold my-input p-2"
            placeholder="price"
            aria-label="number"
            aria-describedby="basic-addon1"
            onChange={(e) => setCoste(e.target.value)}
            value ={cost}
          />*/}
        </div>

        <Link
          className="fas fa-duotone fa-forward text-xs cursor-pointer p-4 "
          id="project"
          style={{ display: "none" }}
          to={`/project/${idproj}`}
        >
          to project
        </Link>

        <i
          className="fas fa-duotone fa-forward text-xl cursor-pointer "
          onClick={() => confirm()}
          id="add"
        >
          {" "}
          update
        </i>
      </div>
    </div>
  );
}
