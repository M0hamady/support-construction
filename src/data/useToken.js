import axios from "axios";
import { useContext, useState } from "react";
import { url } from "./DataMontagat";
import { BasicData } from "./UseContext";

export default function useToken() {
  const { tokenS, changtoken, chanislogin, is_login } = useContext(BasicData);
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());
  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    localStorage.setItem("is_login", true);
    let data = new FormData();
    data.append(
      "token",
      localStorage
        .getItem("token")
        .slice(1, localStorage.getItem("token").length - 1)
    );
    let config = {
      method: "put",
      url: url + "is-admin/",
      headers: {
        ...data.getHeaders,
      },
      data: data,
    };
    let config2 = {
      method: "put",
      url: url + "user/",
      headers: {
        ...data.getHeaders,
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data, "from is admin session");
        localStorage.setItem("is_admin", response.data.is_admin);
        localStorage.setItem("uuid", response.data.uuid);
      })
      .catch(function (error) {
        console.log('error in getting dara');
      });
    try {
      axios(config2)
        .then(function (response) {
          console.log(
            response.data.info[0].username,
            "from is user_info session"
          );
          localStorage.setItem("user_info", response.data.info[0].username);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch {
      console.log("error i get user_info");
    }

    setToken(userToken);
    if (!is_login) {
      changtoken(userToken);
      chanislogin(true);
    }
  };
  return {
    setToken: saveToken,
    token,
  };
}
