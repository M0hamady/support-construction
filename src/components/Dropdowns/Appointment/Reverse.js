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
    // id="main"
    >
      <div className="container-item flexjustify-center rounded " id="first">
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            color: "red !important",
          }}
        >.من فضلك ادخل بيناتك</h1>
        <div className="input-group mb-3 flex  flex-column  justify-center">
          <input
            type="number"
            className="form-control rounded my-input text-center m-5 shadow-none border border-solid border-[#eee]"
            style={{
              width: "180px"
            }}
            placeholder="مقاس الشقة"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setNum(e.target.value)}
          />

          <input
            type="tel"
            className="form-control rounded my-input text-center m-5 shadow-none border border-solid border-[#eee]"
            style={{
              width: "180px"
            }}
            placeholder="رقم الهاتف"
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
        <div className="flex items-center mb-3   flex-column m-2 justify-center">
          <div className="mt-1 text-lg text-center ">
            <span className="input-group-text mr-1" id="basic-addon1">
              ادخل التاريخ المناسب
            </span>
            <input
              type="date"
              className="form-control rounded my-input text-center my-3 shadow-none border border-solid border-[#eee]"
              placeholder="date"
              defaultValue={date}
              // aria-label="date"
              aria-describedby="basic-addon1"
              onChange={(e) => setDate(e.target.value)}
              style={{ width: "100%" }}
            />
            <label for="time">:الوقت</label>
            <input
              type="time"
              className="form-control rounded my-input text-center my-3 shadow-none border border-solid border-[#eee]"
              placeholder="time"
              aria-label="time"
              aria-describedby="basic-addon1"
              onChange={(e) => setTime(e.target.value)}
              style={{ width: "315px" }}
            />
          </div>
        </div>
        <div className="input-group mb-3 flex flex-column m-2 justify-center">
          <div className="input-group-prepend mt-1 text-lg text-center "></div>
          <input
            type="text"
            className="form-control rounded my-input text-center my-3 shadow-none border border-solid border-[#eee]"
            style={{
              width: "450px"
            }}
            placeholder=".ادخل العنوان من فضلك"
            aria-label="Location"
            aria-describedby="basic-addon1"
            onChange={(e) => setAdd(e.target.value)}
          />
        </div>

        <i
          className="fas fa-light fa-check text-xl cursor-pointer my-4 text-white border- font-bold uppercase px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 w-1/2 border border-solid border-[#eee]  "

          onClick={() => confirm()}
        >
          تاكيد
        </i>
      </div>
    </div>
  );
}
