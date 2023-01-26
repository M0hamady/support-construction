import UseToken from "data/useToken";
import { useHistory as Usehistory } from "react-router";
import React, { useState as UseState } from "react";
import Beside from "./Component/Beside";
import Body from "./Component/Body";
import Header from "./Component/Header";
import "./main.style.css";
import Navbar from "components/Navbars/IndexNavbar";
export default function main() {
  const { token, setToken } = UseToken();
  const [islogin, setislogin] = UseState(localStorage.is_login ? true : false);
  const history = Usehistory();
  if (!islogin) {
    history.push("/auth");
  }
  return (
    <div className="flex w-full">
      <Navbar fixed />
      <div className="flex justify-center aligne-center w-full  " style={{marginTop:"150px"}}>
        <Beside />
      </div>
    </div>
  );
}
