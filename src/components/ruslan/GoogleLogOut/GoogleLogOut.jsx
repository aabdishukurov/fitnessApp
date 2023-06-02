import React from "react";
import { GoogleLogout } from "react-google-login";
const GoogleLogOut = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <GoogleLogout
        clientId="YOUR_CLIENT_ID"
        buttonText="Logout"
        onLogoutSuccess={responseGoogle}
      />
    </div>
  );
};

export default GoogleLogOut;
