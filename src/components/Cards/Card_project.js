import React from "react";
import PropTypes from "prop-types";

export default function Card_project({
  statSubtitle,
  statTitle,
  state_cost,
  state_days,
  statPercent,
  statPercentColor,
  responsible,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 shadow-sm   bg-white rounded break-words bg-white rounded  xl:mb-0 shadow-lg">
        <div className="flex-auto p-2">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-2 max-w-full flex-grow flex-1">
              <span className={" mr-2 uppercase"}>
                {" "}
                {state_days} days{" "}
                <span class="fas fa  fa-calendar-days pr-2 shadow"></span>
              </span>
            </div>
            <div className="relative w-auto pl-2 flex-initial">
              <div
                className={
                  "text-white p-2 text-center inline-flex items-center justify-center w-4 h-4 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            <span className="whitespace-nowrap">{responsible}</span>
          </p>
          <p className="text-sm text-slate-400 mt-1">
            <span className={statPercentColor + " mr-2 uppercase"}>
              Costs: {state_cost} LE{" "}
            </span>
            <span className="whitespace-nowrap">{responsible}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export function Card_project_img({
  statTitle,
  state_img,
  statPercentColor,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 shadow-sm ml-1  bg-white rounded break-words bg-white rounded  xl:mb-0 shadow-lg">
        <div className="flex-auto p-2">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-2 max-w-full flex-grow flex-1">
              <span className="font-semibold text-xl pr-4 text-slate-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-2 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <i className={statIconName}></i>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-400 mt-1 ">
            <span className={statPercentColor + " mr-4 pr-4 uppercase"}>
              {state_img}{" "}
            </span>
            <span
              className="fas fa fa-forward pl-4 "
              style={{ color: "rgba(59, 130, 246, 0.9)" }}
            ></span>
          </p>
        </div>
      </div>
    </>
  );
}

// Card_user.defaultProps = {
//   statSubtitle: "Traffic",
//   statTitle: "350,897",
//   statArrow: "up",
//   statPercent: "3.48",
//   statPercentColor: "text-emerald-500",
//   responsible: "Since last month",
//   statIconName: "far fa-chart-bar",
//   statIconColor: "bg-red-500",
// };

// Card_user.propTypes = {
//   statSubtitle: PropTypes.string,
//   statTitle: PropTypes.string,
//   statArrow: PropTypes.oneOf(["up", "down"]),
//   statPercent: PropTypes.string,
//   // can be any of the text color utilities
//   // from tailwindcss
//   statPercentColor: PropTypes.string,
//   responsible: PropTypes.string,
//   statIconName: PropTypes.string,
//   // can be any of the background color utilities
//   // from tailwindcss
//   statIconColor: PropTypes.string,
// };
