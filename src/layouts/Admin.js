import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Services from "views/admin/services";
import Create_moshtrayat from "./moshtrayat/Create_moshtrayat";
import UpdateMoshatr from "./moshtrayat/UpdateMoshatr";
import Usermoshtrayat from "./moshtrayat/UserMoshtra";
import Meetings_accepte from "views/Meetings/MeetingsAccepted";
import Meetings_suc from "views/Meetings/MeetingsSuccess";
import ToodMeet from "views/Meetings/TodayMeet";
import Meetings_accepte_tod from "views/Meetings/MeetingsAcceptedtod";
import Meetings_suc_tod from "views/Meetings/MeetingsSuccess_tod";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/meatings" exact component={Settings} />
            <Route path="/admin/projects" exact component={Tables} />
            <Route
              path="/admin/acceptedmaeatings"
              exact
              component={Meetings_accepte}
            />
            <Route
              path="/admin/successedmaeatings"
              exact
              component={Meetings_suc}
            />
            <Route path="/admin/todaymeatings" exact component={ToodMeet} />
            <Route path="/admin/todaymeatingsAcc" exact component={Meetings_accepte_tod} />
            <Route path="/admin/todaymeatingsSuc" exact component={Meetings_suc_tod} />
            {/*/ <Route path="/admin/moshtrayat/all/user" exact component={UpdateMoshatr} />
            // <Route path="/admin/moshtrayat/all/projct/" exact component={UpdateMoshatr} />
            // <Route path="/admin/tables" exact component={Tables} />
            // <Route path="/admin/tables" exact component={Tables} />
            // <Route path="/admin/tables" exact component={Tables} /> */}
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
