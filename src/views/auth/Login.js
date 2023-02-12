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
                  Or sign in with credentials
                </div>
                <div className="err-handle rounded shadow" role="alert">
                  {err}
                </div>
                <form>
                  <div className="relative w-full mb-3 mt-4">
                    <label
                      className="block text-blueGray-500  text-sm mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="User_name"
                      onChange={(e) => setUserName(e.target.value)}
                      value={username}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-500 text-sm mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <div className="
                  flex flex-wrap items-center  justify-between gap-3
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
                    <div className="w-1/2 text-center text-blueGray-500">
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
Login.propTypes = {
  // setToken: PropTypes.func.isRequired,
};
