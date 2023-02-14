import axios from "axios";
import { url } from "data/DataMontagat";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export default function Reverse() {
  // id of step to create
  const [Name, setName] = useState("");
  const [cost, setCoste] = useState(0);
  const [idproj, setidproj] = useState(useParams().id);
  const [id, setId] = useState(useParams().id);
  let data = new FormData();
  const confirm = () => {
    data.append("name", Name);
    data.append("cost", cost);
    let config = {
      method: "post",
      url: url + `project/moshtrayat/${id}/`,
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
        setCoste(0);
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
      <div className="container-item flexjustify-center rounded " id="first">
        <h1>اضافة منتج.</h1>
        <div
          className="input-group mb-3 flex  flex-column m-2 justify-center"
          style={{ width: "350px" }}
        >
          <input
            type="text"
            className="form-control rounded my-input"
            placeholder="Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "250px" }}
          />
          <div className="input-group-prepend mt-2 text-lg ">
            <input
              type="tel"
              className="form-control rounded text-lg font-bold my-input p-2"
              placeholder="price"
              aria-label="number"
              aria-describedby="basic-addon1"
              onChange={(e) => setCoste(e.target.value)}
              value={cost}
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
