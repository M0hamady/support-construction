import axios from "axios";
import FooterSmall from "components/Footers/FooterSmall";
import Navbar from "components/Navbars/AdminNavbar";
import { url } from "data/DataMontagat";
import { BasicData } from "data/UseContext";
import useToken from "data/useToken";
import React, { useContext, useEffect, useState } from "react";
import Login from "./Login";
// create context

export default function Redirectlogin() {
  return (
    <div>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Login />

          <FooterSmall absolute />
        </section>
      </main>
    </div>
  );
}

export function Is_admin() {
  const [result, setResult] = useState(false);
  const { token, setToken } = useToken();
  const { is_admin, changis_admin, chanislogin, tokenS } =
    useContext(BasicData);
  let data = new FormData();

  data.append("token", tokenS);
  let config = {
    method: "put",
    url: url + "is-admin/",
    headers: {
      ...data.getHeaders,
    },
    data: data,
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setResult(response.data.is_admin);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // check if user is admin
  changis_admin(result);
  return result;
}
