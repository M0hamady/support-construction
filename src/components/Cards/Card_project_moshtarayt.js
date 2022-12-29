import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Card_project_moshatarayat({
  statTitle,
  state_img,
  statPercentColor,
  statIconName,
  statIconColor,
  moshtarayat,
  stepID,
}) 
{
  moshtarayat = moshtarayat.length > 5 ?moshtarayat.slice(1,5):moshtarayat

  console.log(stepID, "id");
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
          </p>
          <div class="flex flex-wrap rounded shadow ">
            {moshtarayat.map((item) => {
              return (
                <div class="rounded shadow p-4 m-2">

                  <Link to={`/mosh/${stepID}`}>
                  <div className="flex justify-between w-full bg-light shadow pl-2 pr-2 rounded-full">
                    <div
                      className={
                        "text-white  text-center inline-flex items-center justify-center w-5 h-5 shadow-lg rounded-full " +
                        statIconColor
                      }
                      style={{ backgroundColor: "cadetblue" }}
                    >
                      <Link
                        class="fa-solid fa-bolt text-xs"
                        to={`/mosh/${stepID}`}
                      ></Link>
                    
                    </div>
                    {/** to update step */}
                     <Link to={`/moshtrayat/update/${item.id}`} class="fas fa-regular  fa-user-pen">test</Link>
                     </div>
                    <h4 className="font-bold text-center"> {item.name}</h4>
                    <h4 className="font-bold text-center">
                      {" "}
                      {item.cost} <small>LE</small>
                    </h4>
                  </Link>
                </div>
              );
            })}
            
            <Link
              to={`/mosh/${stepID}`}
              className="fas fa fa-forward pl-4 ml-4 fade-in duration-1"
              style={{ color: "rgba(59, 130, 246, 0.9)" }}
            ></Link>
          </div>
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
