import React from 'react'
import { Link } from "react-router-dom";

export default function CardCardWtihTitleAndDesc() {
  return (
    <div
              className="flex flex-wrap  items-center mt-20  text-right "
              style={{ flexDirection: "row-reverse", marginBottom:'100px' }}
            >
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  ان تكون ضيف وتتجول علي موقعنا فخر
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                  دعني استغل الفرصة وارحب بك كضيف ل موقع عربي يقدم لك عرض سخي
                  جدا فنحن العرب نحب الضيافة وكرم الضيافة سيمتنا التي لا تغيب
                  عنا كل نهار
                </p>
                <p className="text-md  font-bold leading-relaxed mt-1 mb-4 text-slate-600">
                  اول منتج تختارة يكون مجاني تمام انتقي بعناية اهلا بك
                </p>
                <Link
                  to="/shop"
                  className=" bg-white shadow p-2 rounded  font-bold text-slate-700 mt-8"
                >
                  تصفح منتجاتنا!
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-sky-500">
                  <img
                    alt="..."
                    // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-sky-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      افضل العروض العائلية
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      تعالي مع عائلتك الي موقعنا واستمتعو بالطعم المتميز معا
                      احضر معك زكرياتك الجميلة لانة دائما هناك الافضل سنصنعه
                      معك.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
  )
}
