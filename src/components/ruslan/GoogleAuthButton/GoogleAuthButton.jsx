import React from "react";
import { useDispatch } from "react-redux";
import { googleLogin } from "../../../store/slices/ruslan/authSlice";
import { GoogleLogin } from "react-google-login";
function GoogleAuthButton() {
  const dispatch = useDispatch();

  const handleGoogleResponse = (response) => {
    const { accessToken } = response;
    console.log(response);
    dispatch(googleLogin(accessToken));
  };

  return (
    <div>
      <GoogleLogin
        clientId="1025490078098-i3aqus6h529dgc2pe3ts6o84970i5ig9.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={handleGoogleResponse}
        onFailure={handleGoogleResponse}
        cookiePolicy={"single_host_origin"}
        redirectUri="http://localhost:3000/login"
      />
    </div>
  );
}

export default GoogleAuthButton;
