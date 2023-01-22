import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "assets/img/villa.png";

// import { montagat } from "data/DataMontagat";
export default function MontagatComponen({ groubName, montagat, sec_colo }) {
  function get_name_return_pic(name) {
    // if (name == 'شقة') {

    // }
    // else if(name == 'فيلا') {
    //   setname_pic('villa.jpg')
    // }
    // else if(name == 'دوبلكس') {

    // }

    return (
      <img
        alt="..."
        src={img}
        className="shadow-lg rounded mx-auto max-w-210-px"
      />
    );
  }
  return (
    <section className={`pb-20 bg-${sec_colo}-200 -mt-24 relative py-20`}>
      <div
        className="flex flex-wrap  items-center text-right "
        //   style={{ flexDirection: "row-reverse" }}
      >
        <div className="w-full  px-4 mr-auto ml-auto">
          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
            <i className="fas fa-house text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            {groubName.length ? groubName : "no name"}
          </h3>
          <div
            className="flex  flex-wrap   mr-auto ml-auto"
            style={{ justifyContent: "space-evenly" }}
          >
            {montagat.length ? (
              montagat.map((montag) => {
                return (
                  <Link
                    key={montag.id}
                    to={`/montag/${montag.id}`}
                    className="px-6 mouse-hov hover:-mt-4 ease-linear transition-all duration-150 rounded-lg py-6 m-4 w-200-px"
                  >
                    {get_name_return_pic(montag.qesm)}
                    <div className="pt-6 text-center ">
                      <h5 className="text-xl font-bold">{montag.name}</h5>
                      {/**    <h4
                          className="text-xl font-bold "
                          style={{ color: "rgb(12 66 236)" }}
                        >
                          {montag.price} LE
                        </h4>*/}
                      <p
                        className="mt-1 text-sm text-blueGray-400 uppercase font-semibold"
                        style={{ maxWidth: "95%", margin: "auto" }}
                      >
                        {montag.discription}
                      </p>
                      <div className="mt-6">
                        {/** <button
                            className="text-white  h-8 rounded   mr-1 mb-1"
                            style={{ background: "#265855", width: "80px" }}
                            type="button"
                          >
                            طلب
                          </button> */}
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <h1 className="font-bold text-xl ">
                we are waiting for new items
              </h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
