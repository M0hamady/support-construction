import React from "react";

export default function Money() {
  return (
    <div className="beside-content">
      <div className="Beside-content-item">
        <div className="Beside-content-item-full">
          <i className="fas fa-money"> Payments</i>
          <div className="worker-container remargr">
            <div className="worker shadow rounded remargr">
              <h5>costs</h5>
              <h5>150000 LE</h5>
            </div>
            <div className="worker shadow rounded">
              <h5>payed</h5>
              <h5>150000 LE</h5>
            </div>
            <div className="worker shadow rounded">
              <h5>waiting</h5>
              <h5>150000 LE</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
