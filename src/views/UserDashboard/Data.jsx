import { url } from "data/DataMontagat";
import React, { useEffect, useState } from "react";

export default function Data() {
  const [data, setdata] = useState({});
  useEffect(() => {
    var FormData = require("form-data");
    var data = new FormData();
    data.append("token", localStorage.token);
    var config = {
      method: "put",
      url: url +":8000/user/",
      headers: {
        // Authorization: "Token 8f4acc90b9487a0641b22b17172f07c429c12654",
        ...data.getHeaders(),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [60]);
  return data;
}
