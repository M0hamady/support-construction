import React from "react";
// components
import CardTable from "components/Cards/CardTable.js";
import { Meetings_accepted } from "data/DataVisitors";
import { AllVisitors } from "data/DataVisitors";

export default function Meetings_accepte() {
  const data = AllVisitors();
  const data_accpted = Meetings_accepted(data);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardTable
            color="dark"
            orders={data_accpted}
            table_name="All Meeting"
          />
        </div>
      </div>
    </>
  );
}
