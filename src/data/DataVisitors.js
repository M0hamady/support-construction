import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "./DataMontagat";
import useToken from "./useToken";

export const AllVisitors = () => {
  // console.log(today);
  const [meetings, setMeetings] = useState([]);
  let config = {
    method: "get",
    url: url + "meeting/",
    headers: {},
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setMeetings(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return meetings;
};
export function AddVisitor(ip) {
  let data = new FormData();
  data.append("ip", ip);
  let config = {
    method: "post",
    url: url + "",
    headers: {
      ...data.getHeaders,
    },
    data: data,
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
}

export default function TodayMeetings(data) {
  let newDAta = [];
  const current = new Date();
  const month = "" + parseInt(current.getMonth()) + 1;
  const day = "" + parseInt(current.getDate());
  const today = current.getFullYear() + "-" + month + "-" + day;
  console.log(data, "to filter", today);
  data.forEach((element) => {
    if (element.meet_at == today) {
      newDAta.push(element);
    }
  });
  return newDAta;
}
export function TodayMeetings_accepted(data) {
  let newDAta = [];
  const current = new Date();
  data.forEach((element) => {
    if (
      element.meet_at ==
        current.getFullYear() +
          "-" +
          (parseInt(current.getMonth()) + 1) +
          "-" +
          current.getDate() &&
      element.is_accepted
    ) {
      newDAta.push(element);
    }
  });
  return newDAta;
}
export function Meetings_accepted(data) {
  let newDAta = [];

  data.forEach((element) => {
    if (element.is_accepted) {
      newDAta.push(element);
    }
  });
  return newDAta;
}
export function Meetings_success(data) {
  let newDAta = [];

  data.forEach((element) => {
    if (element.is_success) {
      newDAta.push(element);
    }
  });
  return newDAta;
}
export function TodayMeetings_success(data) {
  let newDAta = [];
  const current = new Date();
  data.forEach((element) => {
    if (
      element.meet_at ==
        current.getFullYear() +
          "-" +
          (parseInt(current.getMonth()) + 1) +
          "-" +
          current.getDate() &&
      element.is_success
    ) {
      newDAta.push(element);
    }
  });
  return newDAta;
}
export function NeedsAction(data) {
  const [newDAta, setNewDAta] = useState([]);
  useEffect(() => {
    data.forEach((element) => {
      if (element.is_accepted == false && !newDAta.includes(element)) {
        setNewDAta((arr) => [...arr, element]);
      }
    });
  }, []);

  return newDAta;
}

export function Exact_Meet(data, id) {
  const [newDAta, setNewDAta] = useState({});
  useEffect(() => {
    data.forEach((element) => {
      if (element.id == id) {
        setNewDAta(element);
      }
    });
  });

  return newDAta;
}
export const Change_accepted_stat = (id, val) => {
  // console.log(today);
  let data = new FormData();
  data.append("is_accepted", val);
  let config = {
    method: "put",
    url: url + `meeting/${id}/`,
    headers: {
      ...data.getHeaders,
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const Change_success_stat = (id, val) => {
  console.log(val);
  console.log(id);
  let data = new FormData();
  data.append("succeded", val);
  let config = {
    method: "put",
    url: url + `meeting/${id}/`,
    headers: {
      ...data.getHeaders,
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log("error");
    });
};
export function AddPartment( number_of_step, id,token ) {
  let data = new FormData();
  data.append("number", number_of_step);
  data.append("name", " website name test relation");
  data.append("address", "api address");
  data.append("id", id);
  data.append("owner", token);
  console.log(token,55,id,number_of_step);
  // data.append('Authorization',{"Token":  token})
  let config = {
    method: "post",
    url: url + `project/`,
    headers: {
      Authorization: "Token " + token,
      ...data.getHeaders,
    },
    data: data,
  };

  console.log(1);
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const Meet_project = (id) => {
  // const [meetings, setMeetings] = useState([]);
  let proj = "";
  let config = {
    method: "get",
    url: url + `meeting/num/${id}/`,
    headers: {},
  };
  axios(config)
    .then(function (response) {
      console.log(response.data.name);
      proj = response.data.name;

      // setMeet(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  return proj;
};
