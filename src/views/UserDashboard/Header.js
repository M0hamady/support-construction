import React from "react";

export default function Header() {
  return (
    <div className="side-user-hader" >
      <img
        src={require("assets/img/team-2-800x800.jpg").default}
        className="rounded-full "
      />
      <h6>mohammedy</h6>
    </div>
  );
}
