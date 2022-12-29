import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { AddVisitor } from "data/DataVisitors";
import Reverse from "components/Dropdowns/Appointment/Reverse";

export default function Landing() {
  // console.log(55555);
  const ip =window.location.host
  // console.log()
  // console.log(AddVisitor())
  const allvisits = AddVisitor(ip)
  console.log(allvisits,5495)
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
