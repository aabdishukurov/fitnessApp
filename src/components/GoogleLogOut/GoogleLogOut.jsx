import React from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import styles from "./GoogleLogOut.module.scss";
const GoogleLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    dispatch(logoutUser());
    navigate("/login");
    console.log(response);
  };

  return <div></div>;
};

export default GoogleLogOut;
