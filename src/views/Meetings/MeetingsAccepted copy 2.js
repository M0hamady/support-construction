import React from "react";
// components
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import CardTable from "components/Cards/CardTable.js";
import { allVisitors, Meetings_accepted } from "data/DataVisitors";

export default function Meetings_accepte() {
  const data = allVisitors();
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
