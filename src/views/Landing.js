import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

// components

import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import { AddVisitor } from "data/DataVisitors";
import Reverse from "components/Dropdowns/Appointment/Reverse";
import Login from "./auth/Login";
import FooterSmall from "components/Footers/FooterSmall";
import Redirectlogin from "./auth/Redirectlogin";
import { BasicData } from "data/UseContext";

export default function Landing() {
  // console.log(55555);
  const history = useHistory();
  const ip = window.location.host;
  // console.log()
  // console.log(AddVisitor())
  const allvisits = AddVisitor(ip);
  const { is_login, tokenS, chanislogin } = useContext(BasicData);
  console.log(is_login, 5555555555555, tokenS);

  // chanislogin(tokenS !== "false" || undefined ? true : false);
  if (tokenS !== "false" && tokenS !== undefined) {
    chanislogin(true);
    console.log(is_login, 545454545);
  }
  console.log(is_login, 5555555555555, tokenS);
  if (is_login == false) {
    return <Login />;
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
