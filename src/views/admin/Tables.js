import React, { useEffect } from "react";

// components

import { Link, useHistory } from "react-router-dom";
import { Allproject_steps } from "data/DataProject";
import { Allprojects } from "data/DataProject";
const d = () => Allproject_steps(10).length;
export default function Tables() {
  const projects = Allprojects();
  const all_proj = () => {
    return projects.map((project) => {
      return (
        <div class="card card-1">
          <div class="card__icon">
            <i class="fas fa-bolt"></i>
          </div>
          <p class="card__exit">{project.count_steps}</p>
          <h2 class="card__title">
            {project.mettings.length > 0
              ? "mr/mrs: " + project.mettings[0].name
              : "name: " + project.name}
          </h2>
          <p class="card__apply">
            <h2 class="card__title">cost: {project.cost} LE</h2>

            <Link class="card__link" to={`/project/${project.id}`}>
              more details <i className="fas fa-arrow-right"></i>
            </Link>
          </p>
        </div>
      );
    });
  };
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-10 px-2">
          <div class="main-container">
            <div class="heading mt-4">
              <h1 class="heading__title ">mohammedy</h1>
              <p class="heading__credits ">
                <Link
                  to={`/book`}
                  className={
                    " p-3 text-center inline-flex items-center justify-center w-4 h-4 shadow-lg mt-4 rounded-full "
                  }
                  style={{
                    backgroundColor: "#f8f8f878",
                    transform: "translateY(15px)",
                  }}
                >
                  <i class="fas fa-solid fa-circle-plus"></i>
                </Link>
              </p>
            </div>

            <div class="cards">{all_proj()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
// <div className="w-full mb-12 px-4">
// <CardTable />
// </div>
