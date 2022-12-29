import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import TodayMeetings from "data/DataVisitors";
import { TodayMeetings_accepted } from "data/DataVisitors";
import { TodayMeetings_success } from "data/DataVisitors";
import { NeedsAction } from "data/DataVisitors";
import { Meetings_accepted } from "data/DataVisitors";
import { Meetings_success } from "data/DataVisitors";
import { Link } from "react-router-dom";
import { AllVisitors } from "data/DataVisitors";

export default function HeaderStats() {
  const data = AllVisitors();
  const todayMeatings = TodayMeetings(data);
  console.log(data);
  const todayMeetings_accept = TodayMeetings_accepted(data);
  const todayMeetings_succes = TodayMeetings_success(data);
  const Meetings_succes = Meetings_success(data);
  const Meetings_accepte = Meetings_accepted(data);
  const needsAction = NeedsAction(data);
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-2 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div
                className="w-full lg:w-6/12 xl:w-3/12 px-2"
                style={{ width: "230px", height: "135px" }}
              >
                <Link to={"/admin/meatings"}>
                  <CardStats
                    statSubtitle="all meetings"
                    statTitle={`${data.length}`}
                    statArrow="up"
                    statPercent="3.48"
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since last month"
                    statIconName="fa fa-users"
                    statIconColor="bg-red-500"
                  />
                </Link>
              </div>
              <div
                className="w-full lg:w-6/12 xl:w-3/12 px-2"
                style={{ width: "230px", height: "135px" }}
              >
                <Link to={"/admin/todaymeatings"}>
                  <CardStats
                    statSubtitle="today meeting"
                    statTitle={`${todayMeatings.length}`}
                    statArrow="down"
                    statPercent="3.48"
                    statPercentColor="text-red-500"
                    statDescripiron="Since last week"
                    statIconName="fas fa-users"
                    statIconColor="bg-orange-500"
                  />
                </Link>
              </div>
              <div
                className="w-full lg:w-6/12 xl:w-3/12 px-2"
                style={{ width: "230px", height: "135px" }}
              >
                <Link to={"/admin/todaymeatingsAcc"}>
                  <CardStats
                    statSubtitle="Today meeting accepted"
                    statTitle={`${todayMeetings_accept.length}`}
                    statArrow="down"
                    statPercent="1.10"
                    statPercentColor="text-orange-500"
                    statDescripiron="Since yesterday"
                    statIconName="fas fa-users"
                    statIconColor="bg-pink-500"
                  />
                </Link>
              </div>
              <div
                className="w-full lg:w-6/12 xl:w-3/12 px-2"
                style={{ width: "230px", height: "135px" }}
              >
                <Link to={"/admin/todaymeatingsSuc"}>
                  <CardStats
                    statSubtitle="Today meeting success"
                    statTitle={`${todayMeetings_succes.length}`}
                    statArrow="up"
                    statPercent="12"
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since last month"
                    statIconName="fas fa-users"
                    statIconColor="bg-lightBlue-500"
                  />
                </Link>
              </div>
              <div
                className="w-full lg:w-6/12 xl:w-3/12 px-2"
                style={{ width: "230px", height: "135px" }}
              >
                <CardStats
                  statSubtitle="meeting needs an action"
                  statTitle={`${needsAction.length}`}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-users"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
              <div
                className="w-full lg:w-6/12 xl:w-3/12 px-2"
                style={{ width: "230px", height: "135px" }}
              >
                <Link to={"/admin/acceptedmaeatings"}>
                  <CardStats
                    statSubtitle="All accepted"
                    statTitle={`${Meetings_accepte.length}`}
                    statArrow="up"
                    statPercent="12"
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since last month"
                    statIconName="fas fa-users"
                    statIconColor="bg-lightBlue-500"
                  />
                </Link>
              </div>
              <div
                className="w-full lg:w-6/12 xl:w-3/12 px-2"
                style={{ width: "230px", height: "135px" }}
              >
                <Link to={"/admin/successedmaeatings"}>
                  <CardStats
                    statSubtitle="All success"
                    statTitle={`${Meetings_succes.length}`}
                    statArrow="up"
                    statPercent="12"
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since last month"
                    statIconName="fas fa-users"
                    statIconColor="bg-lightBlue-500"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
