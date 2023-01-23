import axios from "axios";
import { useContext, useState } from "react";
import { url } from "./DataMontagat";
import { BasicData } from "./UseContext";

export default function useToken() {
  const { tokenS, changtoken, chanislogin, is_login } = useContext(BasicData);
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());
  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    sessionStorage.setItem("is_login", true);
    let data = new FormData();
    data.append(
      "token",
      sessionStorage
        .getItem("token")
        .slice(1, sessionStorage.getItem("token").length - 1)
    );
    let config = {
      method: "put",
      url: url + "is-admin/",
      headers: {
        ...data.getHeaders,
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data.is_admin, "from is admin session");
        sessionStorage.setItem("is_admin", response.data.is_admin);
      })
      .catch(function (error) {
        console.log(error);
      });

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
