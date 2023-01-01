import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { AddVisitor } from "data/DataVisitors";
import Reverse from "components/Dropdowns/Appointment/Reverse";
import useToken from "data/useToken";
import Login from "./auth/Login";
import FooterSmall from "components/Footers/FooterSmall";
import Redirectlogin from "./auth/Redirectlogin";

export default function Landing() {
  // console.log(55555);

  const ip = window.location.host;
  // console.log()
  // console.log(AddVisitor())
  const allvisits = AddVisitor(ip);
  const { token, setToken } = useToken();

  if (token == undefined) {
    return <Redirectlogin setToken={setToken} />;
  }

  // console.log(allvisits,5495)
  return (
    <>
      <Navbar transparent />
      <main>
        <Reverse />
      </main>
      <Footer />
    </>
  );
}
