import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { Link } from "react-router-dom";

export default function CardTable({ color, orders, table_name }) {
  function to_ex_order(order) {
    location.href = `/order/${order}`;
    console.log(order, 5555555555);
  }
  function getSuccesPerc(order) {
    let allSuc = 0;
    order.component.map((comp) => {
      comp.isready ? (allSuc += 1) : allSuc;
    });
    let percentageSuc = (allSuc / order.component.length) * 100;
    return Math.round(percentageSuc);
  }

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded duration-150 " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
        style={{ transition: "1s" }}
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {table_name ? table_name : "table_name"}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse text-center">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  With
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  DAte
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  is accebted
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  time remaining
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {orders.length
                ? orders.map((order) => {
                    return (
                      <link to={'/order/' + order.id}>
                      <tr key={order.id} onClick={() => to_ex_order(order.id)}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <span
                            className={
                              "ml-3 font-bold " +
                              +(color === "light"
                                ? "text-blueGray-600"
                                : "text-white")
                            }
                          >
                            <Link to={`/order/${order.id}`}>{order.name}</Link>
                          </span>
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <Link to={`/order/${order.id}`}>
                            {order.created_at}
                          </Link>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i
                            className={`fas fa-circle text-orange-500 mr-2 `}
                          ></i>
                          {order.is_success ? (
                            <button
                              class="fas fa-solid fa-check text-xl"
                              style={{ color: "#0ee3ae" }}
                            />
                          ) : (
                            <button class="fas fa-solid fa-xmark text-xl text-" />
                          )}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 duration-150">
                          <div className="flex flex-wrap justify-center ">
                            {order.is_accepted ? (
                              <button
                                class="fas fa-solid fa-check text-xl"
                                style={{ color: "#0ee3ae" }}
                              />
                            ) : (
                              <button class="fas fa-solid fa-xmark text-xl" />
                            )}
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                <div
                                  style={{
                                    width: `50%`,
                                    transition: "1s",
                                  }}
                                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500`}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                          <TableDropdown />
                        </td>
                      </tr>
                      </link>
                    );
                  })
                : "no ordeers"}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
