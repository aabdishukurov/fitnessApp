import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleAuth = () => {
  const responseGoogle = (response) => {};

  return (
    <div>
      <GoogleLogin
        clientId="1025490078098-i3aqus6h529dgc2pe3ts6o84970i5ig9.apps.googleusercontent.com"
        buttonText="Войти через Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GoogleAuth;
