import { AddMeeting } from "data/DatLanding";
import React, { useState } from "react";
import "../../../assets/styles/index.css";
{
  /* get num 
        tmie
        location wait untill performing
        or call us directilly
    */
}
export default function Reverse() {
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [addres, setAdd] = useState("");

  const firstClick = () => {
    document.getElementById("first").style.height = "50px";
    document.getElementById("first").style.opacity = "0.11";
    document.getElementById("seconed").style.opacity = "1";
    document.getElementById("first").style.display = "none";
    document.getElementById("seconed").style.display = "block";
  };
  const secClick = () => {
    document.getElementById("seconed").style.opacity = "0.1";
    document.getElementById("third").style.opacity = "1";
    document.getElementById("seconed").style.height = "50px";
    document.getElementById("seconed").style.display = "none";
  };
  const secClick_back = () => {
    document.getElementById("seconed").style.opacity = "0.1";
    document.getElementById("first").style.opacity = "1";
    document.getElementById("first").style.display = "block";
  };
  const thirdClick_back = () => {
    document.getElementById("seconed").style.display = "block";
    document.getElementById("third").style.opacity = "0.1";
    document.getElementById("seconed").style.opacity = "1";
  };
  const confirm = () => {
    console.log(num, time, addres, 555555555555555);
    const ip = window.location.host;
    console.log(date, time);
    if (num && time && addres != " ") {
      document.getElementById("third").style.visibility = "hidden";
      AddMeeting(ip, num, time, date, addres, name);
      let content = document.createElement("div");
      let text = document.createTextNode(
        "working on your meetig we will notify you or you can call us directilly"
      );
      let animCircle = document.createElement("i");
      animCircle.classList.add(
        "fas",
        "ml-2",
        "fa-solid",
        "fa-circle-notch",
        "fa-spin"
      );
      content.style.backgroundColor = "#77d0d7";
      content.classList.add(
        "alert",
        "alert-primary",
        "rounded",
        "font-bold",
        "text-white",
        "uppercase",
        "text-xs",
        "p-2",
        "container-item"
      );
      content.appendChild(text);
      animCircle.style.fontSize = "20px";
      content.appendChild(animCircle);
      document.getElementById("main").appendChild(content);
    }
  };

  return (
    <div
      className="flex m-4 w-full  flex-row  flex-wrap hall-container"
      id="main"
    >
      <div className="container-item flexjustify-center rounded " id="first">
        <h1>please insert your phone.</h1>
        <div className="input-group mb-3 flex  flex-column m-2 justify-center">
          <input
            type="text"
            className="form-control rounded my-input"
            placeholder="NAME"
            aria-label="Username"
            aria-describedby="basic-addon1"
            // style={{width:"50px"}}
            onChange={(e) => setNum(e.target.value)}
          />

          <input
            type="tel"
            className="form-control rounded text-lg font-bold my-input p-2"
            placeholder="015xxxxxxxxx"
            aria-label="number"
            aria-describedby="basic-addon1"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="input-group-prepend mt-2 text-lg ">
            <span className="input-group-text mr-1 ml-2" id="basic-addon1">
              <i className="fas fa-thin fa-phone text-left"></i>
            </span>
          </div>
        </div>

        <i
          className="fas fa-duotone fa-forward text-xl cursor-pointer "
          onClick={() => firstClick()}
        ></i>
      </div>
      <div
        className="container-item rounded"
        id="seconed"
        style={{ opacity: "0.1", transition: "0.5s" }}
      >
        <h1>Meeting time.</h1>
        <div className="input-group mb-3 flex flex-column m-2 justify-center">
          <div className="input-group-prepend mt-1 text-lg ">
            <span className="input-group-text mr-1" id="basic-addon1"></span>
          </div>
          <input
            type="date"
            className="form-control rounded"
            placeholder="date"
            aria-label="date"
            aria-describedby="basic-addon1"
            onChange={(e) => setDate(e.target.value)}
            style={{ minWidth: "60px" ,backgroundColor:"bisque"}}
          />
          
          <div className="input-group-prepend mt-1 text-lg ">
            <span
              className="input-group-text mr-1 ml-1"
              id="basic-addon1"
            ></span>
          </div>
          <input
            type="time"
            className="form-control rounded ml-2"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setTime(e.target.value)}
            style={{ minWidth: "60px" }}
          />
        </div>
        <div className="flex " style={{ justifyContent: "space-around" }}>
          <i
            className="fas fa-duotone fa-backward text-xl cursor-pointer"
            onClick={() => secClick_back()}
          ></i>
          <i
            className="fas fa-duotone fa-forward text-xl cursor-pointer "
            onClick={() => secClick()}
          />
        </div>
      </div>
      <div
        className="container-item rounded"
        id="third"
        style={{ opacity: "0.1", transition: "0.5s" }}
      >
        <h1>Meeting Location.</h1>
        <div className="input-group mb-3 flex flex-column m-2 justify-center">
          <div className="input-group-prepend mt-1 text-lg ">
            <span className="input-group-text mr-1" id="basic-addon1">
              01
            </span>
          </div>
          <input
            type="text"
            className="form-control rounded"
            placeholder="Cairo-tgamo3-aria-st-build-floor"
            aria-label="Location"
            aria-describedby="basic-addon1"
            onChange={(e) => setAdd(e.target.value)}
          />
        </div>
        <div className="flex " style={{ justifyContent: "space-around" }}>
          <i
            className="fas fa-duotone fa-backward text-xl cursor-pointer"
            onClick={() => thirdClick_back()}
          ></i>
          <i
            className="fas fa-light fa-check text-xl cursor-pointer "
            onClick={() => confirm()}
          />
        </div>
      </div>
    </div>
  );
}
