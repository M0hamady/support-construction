import UseToken from "data/useToken";
import { useHistory as Usehistory } from "react-router";
import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Beside from "./Component/Beside";
import Body from "./Component/Body";
import Header from "./Component/Header";

export default function main() {
  const { token, setToken } = UseToken();
  const CheckLogin = () => (token == undefined ? true : false);
  const history = Usehistory();
  if (CheckLogin()) {
    history.push("/auth");
  }
  return (
    <div className="main-dash-user w-screen h-screen bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <div className="side-user shadow rounded bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200 ">
        <Header />
        <Body />
        <div className="side-user-footer">
          <h6>@mohammedy 2023</h6>
        </div>
      </div>
      <Beside />
    </div>
  );
}
