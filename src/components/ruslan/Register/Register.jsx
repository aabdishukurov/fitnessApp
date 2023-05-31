import React from "react";

import FormRegister from "../FormRegister";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/ruslan/userSlice";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {};

  return (
    <div>
      <FormRegister handleClick={handleRegister} />
    </div>
  );
};

export default Register;
