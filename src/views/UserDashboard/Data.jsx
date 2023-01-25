import axios from "axios";
import { local } from "data/DataMontagat";
import { url } from "data/DataMontagat";
import React, { useEffect, useState } from "react";

export default function DataUSer() {
  const [data, setdata] = useState({});
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
      url: "http://127.0.0.1:8000/user/",
      headers: {
        // Authorization: "Token 8f4acc90b9487a0641b22b17172f07c429c12654",
        ...data.getHeaders,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setdata(response.data.projec_steps);
      })
      .catch(function (error) {
        console.log("error from user data in data",error);
      });
  }, [60]);
  return data;
}
