import React from "react";
import { Link } from "react-router-dom";

const BtnClose = () => {
  return (
    <div className="signed__inner">
      <Link to={"/"} className="signed__btn">
        X
      </Link>
    </div>
  );
};

export default BtnClose;
