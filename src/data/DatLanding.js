import axios from "axios";
import { url } from "./DataMontagat";
export function AddMeeting(ip, name, time, date, location, number) {
  let is_done = false;
  console.log(ip, 44444);
  let data = new FormData();
  data.append("ip", ip);
  data.append("name", name);
  data.append("time", time);
  data.append("date", date);
  data.append("location", location);
  data.append("number", number);

  let config = {
    method: "post",
    url: url + ":8000/meeting/",
    headers: {
      ...data.getHeaders,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      is_done = true;
    })
    .catch(function (error) {
      console.log(error);
    });
  return is_done;
}
// "2022-12-16 12:58:12"
