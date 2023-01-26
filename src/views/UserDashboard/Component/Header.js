import React, { useState } from "react";

export default function Header() {
  const [mae, , setmae] = useState(localStorage.user_info);
  function upload_photo() {}
  return (
    <div className="side-user-hader">
      <img
        src={require("assets/img/team-2-800x800.jpg").default}
        className="rounded-full "
      />
      <i className="fas fa-upload p-2" onClick={() => upload_photo()}></i>
      <h6>{mae}</h6>
    </div>
  );
}
