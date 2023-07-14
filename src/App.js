import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import WaterCalculator from "./components/maksatbek/waterCalculator/WaterCalculator";
import { PageCategory } from "./pages";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const clientId =
    "1025490078098-i3aqus6h529dgc2pe3ts6o84970i5ig9.apps.googleusercontent.com";
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientId}>
        <Provider store={store}>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route index element={<WaterCalculator />} />
            <Route path={`/categories`} element={<PageCategory />} />
          </Routes>
        </Provider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
