import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Shop from "views/montgat.js";
import Montag from "views/monatg.js";
import Fstep from "components/order/FirstStep";
import Order from "views/order";
import Project from "layouts/project/Project";
import moshtrayat from "layouts/moshtrayat/moshtrayat";
import Create_moshtrayat from "layouts/moshtrayat/Create_moshtrayat";
import Usermoshtrayat from "layouts/moshtrayat/UserMoshtra";
import UpdateMoshtrayt from "layouts/moshtrayat/UpdateMoshatr";
import AddStep from "layouts/project/AddStep";
import UpdateStep from "layouts/project/UpdateStep";
import ProfileClient from "views/ProfileClient";
import { UseContext } from "data/UseContext";
import DashboardUser from "views/UserDashboard/Main";
import Project_user from "views/UserDashboard/Project";
import Money_user from "views/UserDashboard/Money";
import Moshtrayat_user from "views/UserDashboard/Moshtrayat";
import Designes from "views/UserDashboard/Designes";
import { BasicData } from "data/UseContext";

ReactDOM.render(
  <BrowserRouter>
    <UseContext>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        <Route path="/user/dash" component={DashboardUser} />
        <Route path="/user/project" component={Project_user} />
        <Route path="/user/money" component={Money_user} />
        <Route path="/user/designe" component={Designes} />
        <Route path="/user/moshtrayat" component={Moshtrayat_user} />
        {/** <Route path="/project/moshtrayat/:id" exact component={moshtrayat} />*/}
        {/* add routes without layouts */}
        <Route path="/book" exact component={Landing} />{" "}
        {/** site to take an appointment */}
        <Route path="/profile" exact component={Profile} />{" "}
        {/** users profile*/}
        <Route path="/profile-client" exact component={ProfileClient} />{" "}
        {/** users profile*/}
        <Route path="/shop" exact component={Shop} />
        <Route path="/montag/:id" exact component={Montag} />
        <Route path="/project/:id" exact component={Project} /> {/** */}
        <Route path="/order/:id" exact component={Order} />{" "}
        {/**each meeting  */}
        <Route path="/mosh/:id" exact component={Usermoshtrayat} />
        <Route
          path="/moshtrayat/create/:id"
          exact
          component={Create_moshtrayat}
        />
        {/**
        <Route path="/dash/user" exact component={DashboardUser} /> */}
        <Route path="/step/create/:id" exact component={AddStep} />
        <Route path="/step/update/:id" exact component={UpdateStep} />
        <Route
          path="/moshtrayat/update/:id"
          exact
          component={UpdateMoshtrayt}
        />
        <Route path="/" exact component={Index} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </UseContext>
  </BrowserRouter>,
  document.getElementById("root")
);
