import React from "react";
import gallary1 from "assets/img/gallary1.jpeg";
import gallary2 from "assets/img/gallary2.jpeg";
import gallary3 from "assets/img/gallary3.jpeg";
import gallary4 from "assets/img/gallary4.webp";
import gallary5 from "assets/img/gallary5.jpeg";
import gallary6 from "assets/img/gallary16.jpeg";
import gallary7 from "assets/img/gallary7.jpeg";
import gallary8 from "assets/img/gallary8.webp";
import gallary9 from "assets/img/gallary9.jpeg";
import gallary10 from "assets/img/gallary10.jpeg";


export default function CardGallary() {
  return (
    <div
    >
      <div class="gallery  ">
        <img
          className=""
          data-aos="fade-up-right"
          style={{ animationDelay: "2s" }}
          src={gallary1}
          alt=""
        />
        <img
          className=""
          data-aos="fade-up-right"
          style={{ animationDelay: "5s" }}
          src={gallary2}
          alt=""
        />
        <img
          className=""
          style={{ animationDelay: "1s" }}
          src={gallary3}
          alt=""
          data-aos="fade-up-right"
        />
        <img
          className=""
          style={{ animationDelay: "4s" }}
          src={gallary4}
          alt=""
          data-aos="fade-up-right"
        />
        <img
          className=""
          style={{ animationDelay: "6s" }}
          src={gallary5}
          alt=""
          data-aos="fade-up-right"
        />
        <img
          className=""
          src={gallary6}
          alt=""
          data-aos="fade-up-right"
        />
        <img
          className=""
          src={gallary7}
          alt=""
          data-aos="fade-up-right"
        />
        <img
          className=""
          src={gallary8}
          alt=""
          data-aos="fade-up-right"
        />
        <img
          className=""
          src={gallary9}
          alt=""
          data-aos="fade-up-right"
        />
        <img
          className=""
          src={gallary10}
          alt=""
          data-aos="fade-up-right"
        />
      </div>
    </div>
  );
}
