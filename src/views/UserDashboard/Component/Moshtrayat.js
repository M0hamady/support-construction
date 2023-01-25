import axios from "axios";
import { url } from "data/DataMontagat";
import React, { useEffect, useState } from "react";
import DataUSer from "../Data";
import "./moshtrayat.css";
export default function Moshtrayat() {
  const [state, setstate] = useState([]);
  console.log(DataUSer());
  useEffect(() => {
    var FormData = require("form-data");
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
        // console.log(JSON.stringify(response.data));
        setstate(response.data.projec_steps);
      })
      .catch(function (error) {
        console.log("error from user data in data", error);
      });
  }, [60]);
  return (
    <div className="beside-content-moshtrayat text-center ">
      <h2>جميع خطوات المشروع </h2>
      <div class="timeline">
        {state.map((element) => {
          return (
            <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
              <div class="timeline__event__icon ">
                <i class="lni-cake"></i>
              </div>
              <div class="timeline__event__date">
                {element.start_at}
                <small>:تاريخ5 البدا</small>
              </div>
              <div class="timeline__event__content ">
                <div class="timeline__event__title">{element.name}</div>
                <div class="timeline__event__description">
                  <p>
                    <strong>({element.costs})</strong> القيمة المالية للمرحلة{" "}
                  </p>
                  <p>
                    <i className="fas fa-forward text-blue"></i> عرض الصور{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
