import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
export default function Beside() {
  
  return (
    <>
      <div className="beside-content">
        <div className="Beside-content-item bg-gradient-to-tr from-blue-200  shadow">
          <div className="beside-content-item-left">
            <div>
              <strong> المشروع </strong>
              <i className="fas fa-spinner fa-spin-pulse text-xl"></i>
            </div>

            <ProgressBar
              completed={60}
              animateOnRender={true}
              baseBgColor={"#ffe"}
              bgColor={"rgb(231 211 239)"}
              className="w-full p-4 "
              // style =
            />
          </div>
          <div className="beside-content-item-right">
            <iframe src="https://embed.lottiefiles.com/animation/22830"></iframe>
          </div>
        </div>
        <div className="Beside-content-item bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200 shadow">
          <div className="beside-content-item-left">
            <div>
              <strong> الخطوة الحالية</strong>
              <i className="fas fa-stairs fa-fade text-xl"></i>
            </div>
          </div>
          <div className="beside-content-item-right">
            <iframe src="https://embed.lottiefiles.com/animation/80248"></iframe>
          </div>
        </div>
        <div className="Beside-content-item bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200 shadow">
          <div className="beside-content-item-left">المعاملات المادية</div>
          <div className="beside-content-item-right">
            <iframe src="https://embed.lottiefiles.com/animation/92520"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
