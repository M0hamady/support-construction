import { BasicData } from "data/UseContext";
import useToken from "data/useToken";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import Beside from "./Component/Beside";
import Body from "./Component/Body";
import Designe from "./Component/Designe";
import Header from "./Component/Header";
export default function Designes() {
  const { token, setToken } = useToken();
  const [islogin, setislogin] = useState(localStorage.is_login ? true : false);
  const history = useHistory();
  if (!islogin) {
    history.push("/auth");
  }
  return (
    <div className="main-dash-user w-screen h-screen ">
      <div className="side-user shadow rounded bg-gradient-to-tr from-blue-200  ">
        <Header />
        <Body />
        <div className="side-user-footer">
          <h6>@mohammedy 2023</h6>
        </div>
      </div>
      <Designe />
    </div>
  );
}
