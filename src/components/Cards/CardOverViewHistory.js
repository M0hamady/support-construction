import axios from "axios";
import { url } from "data/DataMontagat";
import { local } from "data/DataMontagat";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CardOverViewHistory() {
  const [data, setdata] = useState({});
  useEffect(() => {
    let config = {
      method: "get",
      url: url + "website/website/",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setdata(response.data[0]);
        // console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [1000]);
  return (
    <section
      className="block relative z-1 bg-blueGray-600 "
      style={{ marginTop: "150px" }}
    >
      <div className="container mx-auto">
        <div className="justify-center flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4  -mt-24">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  {data.pic_saying_1_title}
                </h5>
                <Link to="/auth/login">
                  <div className=" relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={data.pic_saying_1}
                    />
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  {data.pic_saying_2_title}
                </h5>
                <Link to="/profile">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={data.pic_saying_2}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </Link>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <h5 className="text-xl font-semibold pb-4 text-center">
                  {data.pic_saying_3_title}
                </h5>
                <Link to="/landing">
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={data.pic_saying_3}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
