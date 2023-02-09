/*eslint-disable*/
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import CardLanding from "components/Cards/CardLanding";
import CardOverView from "components/Cards/CardOverView";
import CardSmartAsk from "components/Cards/CardSmartAsk";
import { AddVisitor } from "data/DataVisitors";

export default function Index() {
  const ip = window.location.host
  AddVisitor(ip)
  return (
    <>
      <IndexNavbar fixed />
      <CardLanding />
      <CardOverView />
      <CardSmartAsk />
      <Footer />
    </>
  );
}
