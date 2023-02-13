import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { url } from "data/DataMontagat";
import useToken from "data/useToken";
import axios from "axios";

export default function Login() {
  const history = useHistory();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [err, seterr] = useState("");

  const handleSubmit = async (e) => {
    var data = new FormData();
    data.append("username", username);
    data.append("password", password);
    let config = {
      method: "post",
      url: url + "project/generate-token/",
      headers: {
        ...data.getHeaders,
      },
      data: data,
    };

    axios(config)
      .then(() => {
        history.push("/");
      })
      .catch(function (error) {
        seterr("check password or username.");
        setPassword("");
        setUserName("");
      });
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Support Construction
                  </h6>
                </div>
                <div className="btn-wrapper text-center"></div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-500 text-center mb-3 font-bold">
                  sign in with credentials
                </div>
                <div className="err-handle rounded shadow" role="alert">
                  {err}
                </div>
                <form>
                  <div class="relative mt-3">
                    <input class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="username" type="text" placeholder="Enter your username"
                      onChange={(e) => setUserName(e.target.value)}
                      value={username}
                    />
                    <div class="absolute left-0 inset-y-0 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                  </div>
                  <div class="relative mt-3">
                    <input class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      id="password" type="password" placeholder="Enter your password"
                    />
                    <div class="absolute left-0 inset-y-0 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor"            >
                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="
                  flex flex-wrap items-center  justify-between gap-3 mt-4
                  ">
                    <div class="form-check flex">
                      <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer
                      shadow-none
                      " type="checkbox" value="" id="flexCheckDefault" />
                      <label class="text-blueGray-500" for="flexCheckDefault">
                        Remember me
                      </label>
                    </div>
                    <div className="text-blueGray-500">
                      <a
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        className="text-blueGray-200"
                      >
                        <small className="text-blueGray-500">Forgot password?</small>
                      </a>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="text-white bg-[#1e293b] text-sm font-bold uppercase px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 w-1/2  "
                      style={{
                        textShadow: "none",
                      }}
                      type="button"
                      onClick={() => handleSubmit()}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="flex flex-wrap text-center justify-center mt-6 relative">
                    <div className="w-1/2 text-center text-blueGray-500 border border-l-yellow-900 px-5 py-3 rounded-md">
                      <Link to="/auth/register" className="text-blueGray-200">
                        <small className="text-blueGray-500">Create new account</small>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
