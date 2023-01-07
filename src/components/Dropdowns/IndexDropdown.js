import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import useToken from "data/useToken";
import { Is_admin } from "views/auth/Redirectlogin";
import { BasicData } from "data/UseContext";

const IndexDropdown = () => {
  // dropdown props
  // chsck login
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const { tokenS } = useContext(BasicData);
  const { token, setToken } = useToken();
  const CheckLogin = () => (token == undefined ? true : false);
  console.log(Is_admin());
  return (
    <>
      <a
        className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-x uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-light fa-bars"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
          }
        >
          Authintiaction
        </span>
        {CheckLogin() ? (
          <Link
            to="/auth/login"
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          >
            Login
          </Link>
        ) : (
          <>
            {Is_admin() ? (
              <>
                {" "}
                <Link
                  to="/admin/dashboard"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >
                  Dashboard
                </Link>
                <Link
                  to="/admin/dashboard"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >
                  logout
                </Link>
                <Link
                  to="/profile"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >
                  profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/user"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >
                  Home
                </Link>
                <Link
                  to="/admin/User"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >
                  logout
                </Link>
                <Link
                  to="/profile"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                >
                  profile
                </Link>
              </>
            )}

            {/* <Link
              to="/admin/settings"
              className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            >
              Settings
            </Link>
            <Link
              to="/admin/tables"
              className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            >
              Tables
            </Link>
            <Link
              to="/admin/maps"
              className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            >
              Maps
            </Link>
            <div className="h-0 mx-4 my-2 border border-solid border-slate-100" />
            <span
              className={
                "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
              }
            >
              Auth Layout
            </span>
            <Link
              to="/auth/login"
              className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            >
              Register
            </Link>
            <div className="h-0 mx-4 my-2 border border-solid border-slate-100" />
            <span
              className={
                "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
              }
            >
              No Layout
            </span>
            <Link
              to="/landing"
              className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            >
              Landing
            </Link>
            <Link
              to="/profile"
              className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
            >
              Profile
            </Link> */}
          </>
        )}
      </div>
    </>
  );
};

export default IndexDropdown;
