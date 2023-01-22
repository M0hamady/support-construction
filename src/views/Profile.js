import React, { useEffect, useState } from "react";

import Navbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/Footer.js";
import { BasicData } from "data/UseContext";
import { url } from "data/DataMontagat";
import { useHistory } from "react-router";
import axios from "axios";
import useToken from "data/useToken";
import { Link } from "react-router-dom";

export default function Profile() {
  const history = useHistory();
  const [username, setusername] = useState("working on it");
  const [location, setlocation] = useState("working on it");
  const [phone, setphone] = useState("working on it");
  const [email, setemail] = useState("working on it");
  const [datejoined, setdatejoined] = useState("working on it");
  const { token, setToken } = useToken();
  let x = 1;
  if (token == "false" || undefined) {
    history.push("/auth");
  }
  useEffect(() => {
    let data = new FormData();
    data.append("token", "Token " + token);
    let config = {
      method: "put",
      url: url + "user/",
      headers: {
        ...data.getHeaders,
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        setusername(response.data.info[0].username);
        setemail(response.data.info[0].email);
        setdatejoined(
          response.data.info[0].date_joined.slice(0, 10) +
            " : " +
            response.data.info[0].date_joined.slice(11, 16)
        );
        setlocation(response.data.location);
        setphone(response.data.phone);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [50]);

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-slate-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-slate-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("assets/img/team-2-800x800.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Link
                        className="bg-sky-500 active:bg-sky-600 uppercase text-gray font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        to={"/shop"}
                      >
                        Connect
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                          22
                        </span>
                        <span className="text-sm text-slate-400">
                          {/** */} projects
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                          10
                        </span>
                        <span className="text-sm text-slate-400">
                          {/** */} finished projects
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600">
                          89
                        </span>
                        <span className="text-sm text-slate-400">
                          {/** */} current projects
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-700 mb-2">
                    {username}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-400"></i>{" "}
                    {location}
                  </div>
                  <div className="mb-2 text-slate-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-slate-400"></i>
                    {email}
                  </div>
                  <div className="mb-2 text-slate-600">
                    <i className="fas fa-university mr-2 text-lg text-slate-400">
                      {" "}
                      since
                    </i>
                    {datejoined}
                  </div>
                  <div className="mb-2 text-slate-600">
                    <a style={{ border: "0" }} type="tel">
                      <i className="fas fa-phone mr-2 text-lg text-slate-400">
                        {" "}
                        {phone}
                      </i>
                    </a>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-slate-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-slate-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-sky-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
