import React from 'react'
import { Link } from 'react-router-dom'

export default function CardOverViewWithImgAndTitle() {
  return (
    <section className="py-0 bg-slate-600 overflow-hidden text-right">
        <div className="container mx-auto pb-64">
          <div
            className="flex flex-wrap justify-center "
            style={{
              flexDirection: "row-reverse",
              justifyContent: "right",
              textAlign: "right",
            }}
          >
            <div
              className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64"
              style={{
                justifyContent: "right",
                textAlign: "right",
                textAlign: "right",
              }}
            >
              <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                حلويات الحلويات
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-400">
                في{" "}
                <Link
                  to={"/landing"}
                  className="text-slate-300"
                  // target="_blank"
                >
                  حلويات الحلويات
                </Link>{" "}
                يمكنك ايجاد كل تميز مرسوم علي وجوه الضيوف وكذالك صانعي البهجه
                لدينا يمكنك مشاركت بهجتك ايضا لاسعاد الاخرين
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-400">
                كما يمكنك اختيار منتج مجاني عند التعامل معنا لاول مرة
              </p>
              <a
                href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
              >
                بداية المتعه تبدا هنا
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-slate-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>
  )
}
