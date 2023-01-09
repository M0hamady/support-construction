import React, { createContext, useContext, useState } from "react";
// create context
const BasicData = createContext();

// create provider

/// data
// get token
// is admin
// is client
// is Manager
// is eng civil eng
// is designer
// is accountant

const UseContext = ({ children }) => {
  const [name, setname] = useState("mohammedy");
  const changName = (name) => {
    setname(name);
  };
  const [is_admin, setis_admin] = useState(false);
  const changis_admin = (name) => {
    setis_admin(name);
  };
  const [is_clent, setis_client] = useState(false);
  const changis_client = (name) => {
    setis_client(name);
  };
  const [tokenS, setToken] = useState("false");
  const changtoken = (name) => {
    setToken(name);
  };
  //   console.log(tokenS, 1111111111111);
  const [is_login, setIsLogin] = useState(false);

  const chanislogin = (res) => {
    setIsLogin(res);
  };
  const [data_user, setdata_user] = useState({});
  const setData_user = (e) => {
    setdata_user(e);
  };

  //   console.log(tokenS, is_login, 44444444444444444444444);
  return (
    <BasicData.Provider
      value={{
        name,
        changName,
        tokenS,
        changtoken,
        is_login,
        chanislogin,
        is_admin,
        changis_admin,
        data_user,
        setData_user,
      }}
    >
      {children}
    </BasicData.Provider>
  );
};

export { UseContext, BasicData };
