/*eslint-disable*/
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// components
import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import { BasicData } from "data/UseContext";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { name, changName } = useContext(BasicData);
  changName("hbhb");

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Support construction {/*name*/}
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars text-black"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center text-black">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/supportconstructioneg"
                >
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  {/*Docs*/}
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center ">
                <IndexDropdown /> {/** relation with an other component */}
              </li>
              <li className="flex items-center">
                {/** link relation with face book */}
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/supportconstructioneg"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2"></span>
                </a>
              </li>

              <li className="flex items-center">
                {/**   <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/supportconstructioneg"
                  target="_blank"
                >
              link relation with tweet in fut 

                  <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />

                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                  book 

                </a>
                */}
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href = "tel:01003234531"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fas  fa-phone text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li className="flex items-center"></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
