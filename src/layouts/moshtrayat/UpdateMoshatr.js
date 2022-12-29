// import axios from "axios";
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
export default function UpdateMoshtrayt() {
  // id of step to create
  const [Name, setName] = useState("");
  const [cost, setCost] = useState("");
  //   const [cost, setCoste] = useState(0);
  const [idproj, setidproj] = useState(useParams().id);
  const [id, setId] = useState(useParams().id);
  let data = new FormData();
  let config = {
    method: "put",
    url: url + `:8000/project/moshtrayat/${id}/`,
    headers: {
      ...data.getHeaders,
    },
    data: data,
  };
  const confirm = () => {
    data.append("name", Name);
    data.append("cost", cost);
    // data.append("cost", cost);
    console.log(1)
    axios(config)
      .then(function (response) {
        console.log(response);
        document.getElementById("add").style.display = "none";
        document.getElementById("project").style.display = "block";
        document.getElementById("next").style.display = "block";
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
        style={{ minWidth: "350px" }}
      >
        <h1>Moshtra update.</h1>
        <div className="input-group mb-3 flex  flex-column m-2 justify-center">
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
          <div className="input-group-prepend mt-2 text-lg "></div>
          <input
            type="number"
            className="form-control rounded text-lg font-bold my-input p-2"
            placeholder="price"
            aria-label="number"
            aria-describedby="basic-addon1"
            onChange={(e) => setCost(e.target.value)}
            value={cost}
          />
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
