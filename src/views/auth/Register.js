import axios from "axios";
import { url } from "data/DataMontagat";
import React, { useState } from "react";
import { useHistory } from "react-router";


export default function Register() {
  const history = useHistory();
  const [name, setname] = useState("");
  const [pass1, setPass1] = useState("");
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [errorMessage, setErrorMessage] = useState("");


  function Database_connections() {
    if (name === "" || pass1 === "" || email === "" || fName === "" || lName === "" || phoneNumber === "") {
      setErrorMessage("Please fill all the fields");
      return;
    }

    let data = new FormData();
    data.append("username", name);
    data.append("password", pass1);
    data.append("password2", pass1);
    data.append("first_name", fName);
    data.append("last_name", lName);
    data.append("email", email);
    data.append("number", phoneNumber);

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
        history.push("auth/login");
      })
      .catch(function (error) {
        new Error(error.message)
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
                  <h6 className="text-[#1e293b] text-lg font-bold">
                    Sign up for connection
                  </h6>
                </div>
                <div className="btn-wrapper text-center"></div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-[#1e293b] text-center mb-3 font-bold text-lg">
                  <small>Register</small>
                  <p>
                    <small className="text-red-500">{errorMessage}</small>
                  </p>
                </div>
                <div class="relative mt-3">
                  <div class="absolute left-0 inset-y-0 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-7 w-7 ml-3 text-gray-400 p-1" stroke-width="1.5" stroke="currentColor" >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <input class="appearance-none border border-gray-100  pl-12 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="username" type="text" placeholder="Enter your username"
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                  />
                </div>
                <div class="relative mt-3">
                  <div class="absolute left-0 inset-y-0 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 ml-3 text-gray-400 p-1">
                      <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>

                  </div>
                  <input class=" pl-12 appearance-none border border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="username" type="email" placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div class="relative mt-3">
                  <div class="absolute left-0 inset-y-0 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 ml-3 text-gray-400 p-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                  <input class=" pl-12 appearance-none border border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="phoneNumber" type="tel" placeholder="Enter your phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  />
                </div>
                <div className="flex flex-wrap text-center gap-3 ">
                  <div class="relative mt-3 flex-grow">
                    <div class="absolute left-0 inset-y-0 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-7 w-7 ml-3 text-gray-400 p-1" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <input class=" pl-12 appearance-none border border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline " id="username" type="text" placeholder="Enter First Name"
                      onChange={(e) => setFName(e.target.value)}
                      value={fName}
                    />
                  </div>
                  <div class="relative mt-3 flex-grow">
                    <div class="absolute left-0 inset-y-0 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-7 w-7 ml-3 text-gray-400 p-1" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <input class=" pl-12 appearance-none border border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline " id="username" type="text" placeholder="Enter Last Name"
                      onChange={(e) => setLName(e.target.value)}
                      value={lName}
                    />
                  </div>
                </div>
                <div class="relative mt-3">
                  <div class="absolute left-0 inset-y-0 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-7 w-7 ml-3 text-gray-400 p-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                  </div>
                  <input class="pl-12 appearance-none border border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline flex-grow" id="username" type="password" placeholder="Enter your Password"
                    onChange={(e) => setPass1(e.target.value)}
                    value={pass1}
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="text-white bg-[#1e293b] text-sm font-bold uppercase px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 w-1/2  "
                    style={{
                      textShadow: "none",
                    }}
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
