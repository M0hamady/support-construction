import React from "react";
import Body from "./Component/Body";
import Header from "./Component/Header";
import ProjectDetails from "./Component/ProjectDetails";

export default function Project_user() {
  return (
    <div className="main-dash-user w-screen h-screen bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <div className="side-user shadow rounded bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200 ">
        <Header />
        <Body />
        <div className="side-user-footer">
          <h6>@mohammedy 2023</h6>
        </div>
      </div>
      <ProjectDetails />
    </div>
  );
}
