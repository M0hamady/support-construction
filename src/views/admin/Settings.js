import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import CardTable from "components/Cards/CardTable.js";
import { AllVisitors } from "data/DataVisitors";
import { useHistory } from "react-router";

export default function Settings() {
  const data = AllVisitors();
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardTable color="dark" orders={data} table_name="All Meeting" />
        </div>
      </div>
    </>
  );
}
