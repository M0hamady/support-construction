import UseToken from "data/useToken";
import { useHistory as Usehistory } from "react-router";
import React, { useState } from "react";
import Beside from "./Component/Beside";
import Body from "./Component/Body";
import Header from "./Component/Header";

export default function main() {
  const { token, setToken } = UseToken();
  const [islogin, setislogin] = useState(localStorage.is_login ? true : false);
  const history = Usehistory();
  if (!islogin) {
    history.push("/auth");
  }
  return (
    <div className="main-dash-user w-screen h-screen bg-gradient-to-tr bg-blue-200 ">
      <div className="side-user shadow rounded  bg-gradient-to-tr bg-blue-200 ">
        <Header />
        <Body />
        <div className="side-user-footer">
          <h6>@mohammedy c 2023</h6>
        </div>
      </div>
      <Beside />
    </div>
  );
}
