import { AddMeeting } from "data/DatLanding";
import React, { useState } from "react";
import "../../../assets/styles/index.css";

export default function Reverse() {
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [addres, setAdd] = useState("");

  const confirm = () => {
    const ip = window.location.host;

    if (num && time && addres != " ") {
      document.getElementById("third").style.visibility = "hidden";
      AddMeeting(ip, num, time, date, addres, name);
      let content = document.createElement("div");
      let text = document.createTextNode(
        "working on your meetig we will notify you or you can call us directilly"
      );
      let animCircle = document.createElement("i");
      animCircle.classList.add(
        "fas",
        "ml-2",
        "fa-solid",
        "fa-circle-notch",
        "fa-spin"
      );
      content.style.backgroundColor = "#77d0d7";
      content.classList.add(
        "alert",
        "alert-primary",
        "rounded",
        "font-bold",
        "text-white",
        "uppercase",
        "text-xs",
        "p-2",
        "container-item"
      );
      content.appendChild(text);
      animCircle.style.fontSize = "20px";
      content.appendChild(animCircle);
      document.getElementById("main").appendChild(content);
    }
  };

  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10 bg-[#e2e8f0] ">
          <div class="max-w-md mx-auto">
            <div class="flex items-center space-x-5 justify-end" >

              <div class="block pl-2 font-semibold text-xl items-end justify-end text-gray-700">
                <h2 class="leading-relaxed">من فضلك ادخل بياناتك</h2>

              </div>
              <div class="h-14 w-14 bg-[#2e3a4c] rounded-full flex flex-shrink-0 justify-center items-center text-yellow-50 text-2xl font-mono">i</div>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="flex flex-col">
                  <label class="leading-loose text-right font-medium">رقم الهاتف</label>
                  <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 shadow-none"
                    aria-label="number"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setName(e.target.value)}

                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose text-right font-medium">مقاس الشقه</label>
                  <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 shadow-none"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setNum(e.target.value)}
                  />
                </div>
                <div class="flex items-center space-x-4">
                  <div class="flex flex-col">
                    <label class="leading-loose text-right font-medium">أدخل التاريخ المناسب</label>
                    <div class="relative focus-within:text-gray-600 text-gray-400">
                      <input type="date" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 shadow-none"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setDate(e.target.value)} />
                    </div>
                  </div>
                  <div class="flex flex-col justify-end">
                    <label class="leading-loose text-right font-medium">الوقت</label>
                    <div class="relative focus-within:text-gray-600 text-gray-400">
                      <input type="time" class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 shadow-none"
                        aria-label="time"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setTime(e.target.value)} />
                    </div>
                  </div>
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose text-right font-medium">أدخل العنوان من فضلك</label>
                  <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 shadow-none"
                    aria-label="Location"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setAdd(e.target.value)} />
                </div>
              </div>
              <div class="pt-4 flex items-center justify-center">
                <i
                  className="fas fa-light fa-check text-xl flex justify-center cursor-pointer my-4 text-white font-bold uppercase px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 w-1/2 border border-solid border-[#eee] text-center  bg-[#2e3a4c] "

                  onClick={() => confirm()}
                >
                  تاكيد
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}
