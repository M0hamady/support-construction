import { useContext, useState } from "react";
import { BasicData } from "./UseContext";

export default function useToken() {
  const { tokenS, changtoken,chanislogin } = useContext(BasicData);
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());
  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
    
  };
  changtoken(token);
  // chanislogin(true);
  return {
    setToken: saveToken,
    token,
  };
}
