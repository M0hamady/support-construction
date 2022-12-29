// import React from "react";

// // components

// export default function CardOrder() {
//   return (
//     <>
//       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
//         <div className="rounded-t bg-white mb-0 px-6 py-6">
//           <div className="text-center flex justify-between">
//             <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
//             <h6> لتوصيل الاوردر قم بملا البينات</h6>
//             <span> or</span>
//             <button
//               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//               type="button"
//             >
//               طلب بالمحل
//             </button>
//           </div>
//         </div>
//         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
//           <form>
//             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//               بيناتك الشخصية
//             </h6>
//             <div className="flex flex-wrap ">
//               <div className="w-full lg:w-6/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="grid-password"
//                   >
//                     الاسم
//                   </label>
//                   <input
//                     type="text"
//                     className="border-0 px-3 py-3 text-right placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     defaultValue="محمدي"
//                   />
//                 </div>
//               </div>
//               <div className="w-full lg:w-6/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="grid-password"
//                   >
//                     بريد الكتروني
//                   </label>
//                   <input
//                     type="email"
//                     className="border-0 px-3 py-3 text-right  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     defaultValue="mohammedy@example.com"
//                   />
//                 </div>
//               </div>
//             </div>

//             <hr className="mt-6 border-b-1 border-blueGray-300" />

//             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//               مكان التوصيل
//             </h6>
//             <div className="flex flex-wrap">
//               <div className="w-full lg:w-12/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="grid-password"
//                   >
//                     العنوان
//                   </label>
//                   <input
//                     type="text"
//                     className="border-0 text-right px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     defaultValue="العاصمة الادارية- مجمع المكاتب - مكتب تخطيط المواقع الالكترونية"
//                   />
//                 </div>
//               </div>
//               <div className="w-full lg:w-4/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="grid-password"
//                   >
//                     المدينة
//                   </label>
//                   <input
//                     type="email"
//                     className="border-0 px-3 text-right py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     defaultValue="العاصمة  الادارية"
//                   />
//                 </div>
//               </div>
//               <div className="w-full lg:w-4/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="grid-password"
//                   >
//                     حي/مركز
//                   </label>
//                   <input
//                     type="text"
//                     className="border-0 px-3 text-right  py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     defaultValue="مصر"
//                   />
//                 </div>
//               </div>
//               <div className="w-full lg:w-4/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="grid-password"
//                   >
//                     اقرب رقم بريدي
//                   </label>
//                   <input
//                     type="text"
//                     className="border-0 px-3 text-right  py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     defaultValue="الرقم البريدي"
//                   />
//                 </div>
//               </div>
//             </div>

//             <hr className="mt-6 border-b-1 border-blueGray-300" />

//             <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
//               مواصافات خاصة لطلب المنتج
//             </h6>
//             <div className="flex flex-wrap">
//               <div className="w-full lg:w-12/12 px-4">
//                 <div className="relative w-full mb-3">
//                   <label
//                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                     htmlFor="grid-password"
//                   >
//                     مواصافات خاصة لطلب المنتج
//                   </label>
//                   <textarea
//                     type="text"
//                     className="border-0 px-3 text-right  py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                     defaultValue="اقوم بتخطيط وتجهيز الخطط المستقبلية للمجموعه"
//                     rows="4"
//                   ></textarea>
          
//                 </div>
//               </div>
//             </div>
//             <hr className="mt-6 border-b-1 border-blueGray-300" />

//             <button
//               className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 mt-5"
//               type="button"
//             >
//               طلب
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
