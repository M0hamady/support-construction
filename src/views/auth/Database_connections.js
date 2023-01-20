import axios from "axios";
import { url } from "data/DataMontagat";
import useToken from "data/useToken";
import React, { useEffect, useState } from "react";
import Redirectlogin from "./Redirectlogin";

export default function Database_connections(
  username,
  password,
  password2,
  frName,
  laName,
  email
) {
  let data = new FormData();
  data.append("username", username);
  data.append("password", password);
  data.append("password2", password2);
  data.append("first_name", frName);
  data.append("last_name", laName);
  data.append("email", email);
  var config = {
    method: "post",
    url: url + "register/",
    headers: {
      ...data.getHeaders,
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      //   console.log(JSON.stringify(response.data));
      return true
    })
    .catch(function (error) {
      console.log(error);
      return false
    });
}
