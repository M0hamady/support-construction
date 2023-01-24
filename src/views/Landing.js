import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

// components

import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import Reverse from "components/Dropdowns/Appointment/Reverse";

export default function Landing() {
  // console.log(55555);
  const history = useHistory();
  const ip = window.location.host;
  if (!localStorage.is_login) {
    history.push("auth/login");
  }
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
