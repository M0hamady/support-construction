import React from "react";

// components

import { all_worker } from "components/Services/component";
export default function Services() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className=" flex flex-wrap bg-white-500  mb-12 mt-24  px-4">
          
          {all_worker()}
        </div>
      </div>
    </>
  );
}
