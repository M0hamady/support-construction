import React from "react";
import img from "assets/img/team-1-800x800.jpg";
import img2 from "assets/img/team-2-800x800.jpg";
import img3 from "assets/img/team-3-800x800.jpg";
import img4 from "assets/img/team-4-470x470.png";

export default function CardEmployee() {
  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2
              data-aos="fade-up"
              className="text-4xl font-semibold">ها هم خبرائنا</h2>
            <p
              data-aos="fade-in"
              className="text-lg leading-relaxed m-4 text-blueGray-500">
              بعد كل ما قدمتة مجموعه العمل يمكننا ان نقول عنهم خبراء بكل ثقة
              وذالك نتج عن اراء الضيوف قم بالتجربة واكتشف بنفسك
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 hover:shadow-lg ease-linear transition-all duration-150 rounded-lg">
            <div className="px-6">
              <img
                data-aos="fade-up"
                alt="..."
                src={img}
                className="shadow-lg rounded-full mx-auto max-w-120-px"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold"
                  data-aos="fade-in"
                >احمد القرشي</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  مدير المشروع
                </p>
                <div className="mt-6">
                  <button
                    className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:shadow-lg ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:shadow-lg ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button
                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:shadow-lg ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-dribbble"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 hover:shadow-lg ease-linear transition-all duration-150 rounded-lg">
            <div className="px-6">
              <img
                data-aos="fade-up"
                alt="..."
                src={img2}
                className="shadow-lg rounded-full mx-auto max-w-120-px"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">احمد منصور</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  مدير التسويق
                </p>
                <div className="mt-6">
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:shadow-lg ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:shadow-lg ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 hover:shadow-lg ease-linear transition-all duration-150 rounded-lg">
            <div className="px-6">
              <img
                data-aos="fade-up"
                alt="..."
                src={img3}
                className="shadow-lg rounded-full mx-auto max-w-120-px"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">احمد ماليات</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  الفرع المالي
                </p>
                <div className="mt-6">
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:shadow-lg ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:shadow-lg ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:shadow-lg ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 hover:shadow-lg ease-linear transition-all duration-150 rounded-lg">
            <div className="px-6">
              <img
                alt="..."
                src={img4}
                className="shadow-lg rounded-full mx-auto max-w-120-px "
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold ">زياد القرشي</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  مسؤل التطوير
                </p>
                <div
                  className="mt-6 "
                  style={{ justifyContent: "space-around" }}
                >
                  <button
                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:shadow-lg ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-dribbble"></i>
                  </button>
                  <button
                    className="hover:-mt-4 bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:shadow-lg ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:shadow-lg ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 hover:shadow-lg ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
