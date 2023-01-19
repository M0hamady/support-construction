import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { url } from "./DataMontagat";
import { BasicData } from "./UseContext";
import useToken from "./useToken";

export function ProjectData(id) {
  const { token, setToken } = useToken();

  //   const [state, setState] = useState("initialState");
  let state = { name: null };
  let config = {
    method: "get",
    url: url + `meeting/num/${id}/`,
    headers: {
      Authorization: "Token " + token,
    },
  };
  axios(config)
    .then(function (response) {
      // console.log(response.data.name);
      state = response.data;
      // setMeet(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  // console.log(state);
  return state;
}
export const Allprojects = () => {

  const { token, setToken } = useToken();
  console.log(token, 54545454545);
  const [state, setState] = useState([]);
  let config = {
    method: "get",
    url: url + "project/",
    headers: {
      Authorization: "Token " + token,
    },
  };
  useEffect(() => {
    // return () => {
    console.log("from use fef");
    axios(config)
      .then(function (response) {
        console.log(response.data, "from axios");
        setState(response.data);
        console.log("done state");
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // };
  }, []);
  console.log(state, "from function in data proj  ");

  return state;
};
export const Allproject_steps = (id) => {
  // get all steps by id of project
  const { token, setToken } = useToken();
  const [state, setState] = useState([]);
  let config = {
    method: "get",
    url: url + `project/step/${id}/`,
    headers: {
      Authorization: "Token " + token,
    },
  };
  useEffect(() => {
    // return () => {
    console.log("from use fef");
    axios(config)
      .then(function (response) {
        console.log(response.data, "from axios");
        setState(response.data);
        console.log("done state");
      })
      .catch(function (error) {
        console.log(error);
      });
    // };
  }, []);
  console.log(state, "from function in data proj  ");

  return state;
};
