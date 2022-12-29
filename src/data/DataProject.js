import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "./DataMontagat";

export function ProjectData(id) {
  //   const [state, setState] = useState("initialState");
  let state = { name: null};
  let config = {
    method: "get",
    url: url+`:8000/meeting/num/${id}/`,
    headers: {},
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
  const [state, setState] = useState([]);
  let config = {
    method: "get",
    url: url+":8000/project/",
    headers: {},
  };
  useEffect(() => {
    // return () => {
      console.log("from use fef");
      axios(config)
        .then(function (response) {
          console.log(response.data,'from axios');
          setState(response.data);
          console.log('done state')
        })
        .catch(function (error) {
          console.log(error);
        });
    // };
  },[]);
  console.log(state, "from function in data proj  ");

  return state;
};
export const Allproject_steps = (id) => {
  // get all steps by id of project
  const [state, setState] = useState([]);
  let config = {
    method: "get",
    url: url+`:8000/project/step/${id}/`,
    headers: {},
  };
  useEffect(() => {
    // return () => {
      console.log("from use fef");
      axios(config)
        .then(function (response) {
          console.log(response.data,'from axios');
          setState(response.data);
          console.log('done state')
        })
        .catch(function (error) {
          console.log(error);
        });
    // };
  },[]);
  console.log(state, "from function in data proj  ");

  return state;
};
