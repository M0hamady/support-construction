import FooterSmall from "components/Footers/FooterSmall";
import Navbar from "components/Navbars/AdminNavbar";
import { url } from "data/DataMontagat";
import useToken from "data/useToken";
import React, { useState } from "react";
import Login from "./Login";

export default function Redirectlogin({ setToken }) {
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
          <Login setToken={setToken} />

          <FooterSmall absolute />
        </section>
      </main>
    </div>
  );
}

export function Is_admin() {
  const [result, setResult] = useState(false);
  const { token, setToken } = useToken();
  let data = new FormData();
  if (token == undefined) {
    return <Redirectlogin  setToken={setToken}/>
  }
  data.append("token", token);
  let config = {
    method: "post",
    url: url + ":8000/is-admin/",
    headers: {
      ...data.getHeaders,
    },
    data: data,
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setResult(response.data.is_admin)

      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // check if user is admin
  return result
}
