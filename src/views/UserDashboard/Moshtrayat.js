import useToken from "data/useToken";
import React from "react";
import { useHistory } from "react-router";
import Body from "./Component/Body";
import Header from "./Component/Header";
import Moshtrayat_userComponent from "./Component/Moshtrayat";

export default function Moshtrayat_user() {
  const { token, setToken } = useToken();
  const CheckLogin = () => (token == undefined ? true : false);
  const history = useHistory();
  if (CheckLogin()) {
    history.push("/auth");
  }
  const data = ''
  return (
    <div className="main-dash-user w-screen h-screen bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <div className="side-user shadow rounded bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200 ">
        <Header />
        <Body />
        <div className="side-user-footer">
          <h6>@mohammedy 2023</h6>
        </div>
      </div>
      <Moshtrayat_userComponent />
    </div>
  );
}
