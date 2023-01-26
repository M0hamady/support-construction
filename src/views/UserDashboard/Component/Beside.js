import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { url } from "data/DataMontagat";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Beside() {
  const [state, setstate] = useState({});
  const [projects, setprojects] = useState([]);
  useEffect(() => {
    var data = new FormData();
    data.append(
      "token",
      localStorage
        .getItem("token")
        .slice(1, localStorage.getItem("token").length - 1)
    );
    var config = {
      method: "put",
      url: url + "user/",
      headers: {
        // Authorization: "Token 8f4acc90b9487a0641b22b17172f07c429c12654",
        ...data.getHeaders,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setstate(response.data);
        setprojects(response.data.projects);
        console.log(response.data.projects);
      })
      .catch(function (error) {
        console.log("error from user data in data", error);
      });
  }, [600]);
  return (
    <>
      <div class="container-5">
        <div class="card-5">
          <div class="face-5 face1">
            <div class="content">
              <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
              <h3>التصميمات</h3>
            </div>
          </div>
          <div class="face-5 face2">
            <div class="content">
              <p>Comming soon</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div class="card-5">
          <div class="face-5 face1">
            <div class="content">
              <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
              <h3>متابعة التطورات</h3>
            </div>
          </div>
          <div class="face-5 face2">
            <div class="content">
              {projects.map((project) => {
                return (
                  <Link className="rounded">
                    <div
                      className="w-full flex shadow p-2 justify-between aligne-center"
                      style={{ minWidth: "240px", flexWrap: "wrap" }}
                    >
                      <h4>project: {project.address} </h4>
                      <h4>{project.cost} ج</h4>
                      <i className="fas fa-forward"></i>
                    </div>
                  </Link>
                );
              })}
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
// <div class="card-5">
// <div class="face-5 face1">
//   <div class="content">
//     <i
//       className="fas fa-money text-gray "
//       style={{ fontSize: "90px" }}
//     ></i>
//     <h3>التعاملات المادية</h3>
//   </div>
// </div>
// <div class="face-5 face2">
//   <div class="content">
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
//       cum cumque minus iste veritatis provident at.
//     </p>
//     <a href="#">Read More</a>
//   </div>
// </div>
// </div>