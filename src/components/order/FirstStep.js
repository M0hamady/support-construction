import React from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardOrder from "components/Cards/CardOrder";

export default function FirstStep() {
  return (
    <div className="text-right">
      <Navbar />
      <div className=" px-4 m-4" style={{ width: "80%", margin: "5% 10%" }}>
        <CardOrder />
      </div>
      <Footer />
    </div>
  );
}
