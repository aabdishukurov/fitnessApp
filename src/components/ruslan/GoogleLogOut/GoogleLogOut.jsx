import React from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../store/slices/ruslan/authSlice";
import { useNavigate } from "react-router-dom";
const GoogleLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    dispatch(logoutUser());
    navigate("/login");
    console.log(response);
  };

  return (
    <div>
      <GoogleLogout
        clientId="1025490078098-i3aqus6h529dgc2pe3ts6o84970i5ig9.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
      />
    </div>
  );
};

export default GoogleLogOut;
