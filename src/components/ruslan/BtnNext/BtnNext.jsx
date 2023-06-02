import React from "react";
import { Link } from "react-router-dom";

const BtnNext = ({ title, to }) => {
  return (
    <>
      <div>
        <Link to={to} className="form__btn-next">
          {title}
        </Link>
      </div>
    </>
  );
};

export default BtnNext;
