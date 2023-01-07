import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Tables from "views/admin/Tables";
import Beside from "./Beside.js";
import Body from "./Body";
import Header from "./Header";

export default function main() {
  function Proj() {
    return <h1>55555555555555555</h1>;
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
    
      <Switch>
        <Route path="/dash" exact component={Beside} />
        <Route path="/project" exact component={Proj} />
      </Switch>
    </div>
  );
}
