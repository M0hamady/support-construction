import React from "react";
// components
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import CardTable from "components/Cards/CardTable.js";
import { allVisitors } from "data/DataVisitors";
import { Meetings_success } from "data/DataVisitors";

export default function Meetings_suc() {
  const data = allVisitors();

  const data_suc = Meetings_success(allVisitors());
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
