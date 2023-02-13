import React from "react";
import { useHistory } from "react-router-dom";

// components

import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer";
import Reverse from "components/Dropdowns/Appointment/Reverse";

export default function Landing() {
  const history = useHistory();

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
