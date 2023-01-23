import axios from "axios";
import { url } from "data/DataMontagat";
import { local } from "data/DataMontagat";
import useToken from "data/useToken";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Database_connections from "./Database_connections";

export default function Register() {
  const history = useHistory();
  const [name, setname] = useState("");
  const [pass1, setPass1] = useState("");
  // const [pass2, setPass2] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [err_name, seterr_name] = useState("");

  function Database_connections() {
    let data = new FormData();
    data.append("username", name);
    data.append("password", pass1);
    data.append("password2", pass1);
    data.append("first_name", fName);
    data.append("last_name", lName);
    data.append("email", email);
    var config = {
      method: "post",
      url: url + "register/",
      headers: {
        ...data.getHeaders,
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        //   console.log(JSON.stringify(response.data));
        history.push("auth/login");
      })
      .catch(function (error) {
        console.log(error.response.data);
        if (error.response.data.username) {
          document.getElementById("nameErr").innerText =
            error.response.data.username;
        } else {
          document.getElementById("nameErr").innerText = "";
        }
        if (error.response.data.email) {
          document.getElementById("emailErr").innerText =
            error.response.data.email;
        } else {
          document.getElementById("emailErr").innerText = "";
        }
        if (error.response.data.password) {
          document.getElementById("passErr").innerText =
            error.response.data.password;
        } else {
          document.getElementById("passErr").innerText = "";
        }
      });
  }

  return (
    <div id="registerC">
      <div className="container mx-auto px-4 h-full" id="register">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up for connection.
                  </h6>
                </div>
                <div className="btn-wrapper text-center"></div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>simple signup</small>
                  <label>{err_name}</label>
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>

                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                    onChange={(e) => setname(e.target.value)}
                  />
                  <label
                    className="block uppercase text-white text-xs font-bold m-1 rounded p-1 bg-red-500"
                    style={{ width: "fit-content" }}
                    htmlFor="grid-password"
                    id="nameErr"
                  ></label>
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    className="block uppercase text-white text-xs font-bold m-1 rounded p-1 bg-red-500"
                    style={{ width: "fit-content" }}
                    htmlFor="grid-password"
                    id="emailErr"
                  ></label>
                </div>
                <div className="flex flex-wrap justify-between text-center">
                  <div className="relative  mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Firist name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Firist name"
                      onChange={(e) => setFName(e.target.value)}
                    />
                  </div>
                  <div className="relative  mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      last name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="last name"
                      onChange={(e) => setLName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    onChange={(e) => setPass1(e.target.value)}
                  />
                  <label
                    className="block uppercase text-white text-xs font-bold m-1 rounded p-1 bg-red-500"
                    style={{ width: "fit-content" }}
                    htmlFor="grid-password"
                    id="passErr"
                  ></label>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => Database_connections()}
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
