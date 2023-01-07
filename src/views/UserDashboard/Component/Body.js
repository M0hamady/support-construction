import React from "react";
import { Link } from "react-router-dom";

export default function Body() {
  return (
    <div className="side-user-body">
      <diV>
        <Link to={"/user/project"}>
          {" "}
          <i className="fas fa-solid text-x  fa-bolt ">
            {" "}
            <h5>المشاريع</h5>
          </i>{" "}
        </Link>
      </diV>
      <diV>
        <Link to={"/user/designe"}>
          {" "}
          <i className="fas fa-solid text-x  fa-pen">
            <h5> التصاميم</h5>
          </i>{" "}
        </Link>
      </diV>
      <diV>
        <Link to={"/user/moshtrayat"}>
          {" "}
          <i className="fas fa-solid text-x  fa-gift">
            {" "}
            <h5>المشتراياات</h5>
          </i>{" "}
        </Link>
      </diV>
      <diV>
        <Link to={"/user/money"}>
          {" "}
          <i className="fas fa-solid text-x  fa-money">
            {" "}
            <h5>المدفوعات</h5>
          </i>{" "}
        </Link>
      </diV>
    </div>
  );
}
