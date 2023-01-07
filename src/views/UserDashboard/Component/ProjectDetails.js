import React from "react";

export default function ProjectDetails() {
  return (
    <div className="beside-content">
      <div className="Beside-content-item">
        <div className="Beside-content-item-full">
          <i className="fas fa-person"> workes on project</i>
          <div className="worker-container">
            <div className="worker shadow rounded remargr1">
              <small>manager</small>
              <small>ah elkorashy</small>
              <a href={`tel`}>
                <i className="fas fa-phone"></i>
              </a>
            </div>
            <div className="worker shadow rounded">
              <small>manager</small>
              <small>ah elkorashy</small>
              <a href={`tel`}>
                <i className="fas fa-phone"></i>
              </a>
            </div>
            <div className="worker shadow rounded">
              <small>manager</small>
              <small>ah elkorashy</small>
              <a href={`tel`}>
                <i className="fas fa-phone"></i>
              </a>
            </div>
            <div className="worker shadow rounded">
              <small>manager</small>
              <small>ah elkorashy</small>
              <a href={`tel`}>
                <i className="fas fa-phone"></i>
              </a>
            </div>
            <div className="worker shadow rounded">
              <small>manager</small>
              <small>ah elkorashy</small>
              <a href={`tel`}>
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Beside-content-item">
        <div className="Beside-content-item-full">
          <i className="fas fa-handshake "> meettings</i>
          <div className="worker-container">
            <div className="worker shadow rounded">
              <h5>At: </h5>
              <h5>2022/5/16</h5>
            </div>
            <div className="worker shadow rounded">
              <h5>At: </h5>
              <h5>2022/5/16</h5>
            </div>
            <div className="worker shadow rounded">
              <h5>At: </h5>
              <h5>2022/5/16</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="Beside-content-item">
        <div className="Beside-content-item-full">
          <i className="fas fa-money "> payments</i>
          <div className="worker-container">
            <div className="worker shadow rounded">
              <h5>at: 2022/5/16</h5>
              <h5> 6500 LE</h5>
            </div>
            <div className="worker shadow rounded">
              <h5>at: 2022/5/16</h5>
              <h5>60 LE</h5>
            </div>
            <div className="worker shadow rounded">
              {" "}
              <h5>at: 2022/5/16</h5>
              <h5> 600 LE</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="Beside-content-item">
        <div className="Beside-content-item-full">
          <i className="fas fa-paperclip "> steps</i>
          <div className="worker-container">
            <div className="worker shadow rounded">
              <h5>All steps:</h5>
              <h5> 16</h5>
            </div>
            <div className="worker shadow rounded">
              <h5>finished</h5>
              <h5>10</h5>
            </div>
            <div className="worker shadow rounded">
              {" "}
              <h5>waiting</h5>
              <h5> 5</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
