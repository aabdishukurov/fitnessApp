import React from "react";
import { useDispatch } from "react-redux";
import { googleLogin } from "../../../../store/slices/ruslan/authSlice";
import { GoogleLogin } from "react-google-login";
function GoogleAuthButton() {
  const dispatch = useDispatch();

  const handleGoogleResponse = (response) => {
    const { tokenId } = response;

    dispatch(googleLogin(tokenId));
  };

  return (
    <div>
      <GoogleLogin
        clientId="1025490078098-tcodiupo9rqfrr41eci68f7ce8r0vm2f.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={handleGoogleResponse}
        onFailure={handleGoogleResponse}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default GoogleAuthButton;
