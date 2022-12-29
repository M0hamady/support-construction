import React from "react";
// components
import CardTable from "components/Cards/CardTable.js";
import { Meetings_success } from "data/DataVisitors";
import { AllVisitors } from "data/DataVisitors";

export default function Meetings_suc() {
  const data = AllVisitors();

  const data_suc = Meetings_success(AllVisitors());
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardTable color="dark" orders={data_suc} table_name="All Meeting" />
        </div>
      </div>
    </>
  );
}
