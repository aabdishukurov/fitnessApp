import React from "react";

const BtnNext = ({ title, handleClick }) => {
  return (
    <>
      <div>
        <button className="form-register__btn-next" onClick={handleClick}>
          {title}
        </button>
      </div>
    </>
  );
};

export default BtnNext;
