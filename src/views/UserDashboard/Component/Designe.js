import React from "react";

export default function Designe() {
  return (
    <div className="beside-content">
      <div className="Beside-content-item">
        <div className="Beside-content-item-full">
          <i className="fas fa-pen"> Designes</i>
          <div className="worker-container remargr">
            <div className="worker shadow rounded remargr">
              <h5>num: 1</h5>
              <h5>25/5/2022</h5>
            </div>
            <div className="worker shadow rounded">
              <h5>num: 2</h5>
              <h5>25/5/2022</h5>
            </div>
            <div className="worker shadow rounded">
              <h5>num: 3</h5>
              <h5>25/5/2022</h5>
            </div>
          </div>
        </div>
      </div>
      <i className="fas fa-image "> fesigne present</i>
      <div className="besid-content-item-moshtra designepic">
        <img
          src={require("assets/img/team-2-800x800.jpg").default}
          className="rounded m-2 "
        />
      </div>
    </div>
  );
}
