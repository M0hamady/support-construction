import axios from "axios";
import { url } from "data/DataMontagat";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
{
  /* get num 
        tmie
        location wait untill performing
        or call us directilly
    */
}
export default function AddStep() {
  // id of step to create
  const [Name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  //   const [cost, setCoste] = useState(0);
  const [idproj, setidproj] = useState(useParams().id);
  const [id, setId] = useState(useParams().id);
  let data = new FormData();
  const confirm = () => {
    data.append("name", Name);
    data.append("start_at", start);
    data.append("finished_at", end);
    // data.append("cost", cost);
    let config = {
      method: "post",
      url: url + `:8000/project/addstep/${id}/`,
      headers: {
        ...data.getHeaders,
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response);
        document.getElementById("add").style.display = "none";
        document.getElementById("project").style.display = "block";
        document.getElementById("next").style.display = "block";
        setName(" ");
        console.log(response.data.projectid);
        setidproj(response.data.projectid);
      })
      .catch(function (error) {
        console.log(error);
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
        style={{ minWidth: "300px" }}
      >
        <h1>Add step.</h1>
        <div className="input-group mb-3 flex  flex-column m-2 justify-center">
          <input
            type="text"
            className="form-control rounded my-input"
            placeholder="Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ minWidth: "100x", transition: "0.6" }}
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="input-group-prepend mt-2 text-lg ">
            <input
              type="date"
              className="form-control rounded text-lg font-bold my-input p-2"
              placeholder="start"
              aria-label="number"
              aria-describedby="basic-addon1"
              onChange={(e) => setStart(e.target.value)}
              value={start}
            />
          </div>

          <div className="input-group-prepend mt-2 text-lg ">
            <input
              type="date"
              className="form-control rounded text-lg font-bold my-input p-2"
              placeholder="start"
              aria-label="number"
              aria-describedby="basic-addon1"
              onChange={(e) => setEnd(e.target.value)}
              value={end}
            />
          </div>
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
          className="fas fa-duotone fa-forward text-xs cursor-pointer p-4"
          onClick={() => addNext()}
          id="next"
          style={{ display: "none" }}
        >
          add next
        </i>
        <i
          className="fas fa-duotone fa-forward text-xl cursor-pointer "
          onClick={() => confirm()}
          id="add"
        >
          add
        </i>
      </div>
    </div>
  );
}
