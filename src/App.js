import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageCategory } from "./pages/Category/PageCategory";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Categories } from "./components";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import { InfoExercises } from "./pages/InfoExercises/InfoExercises";
import WaterCalculator from "./components/waterCalculator/WaterCalculator";
import { PageHome, PageProHome } from "./pages";

function App() {
  const clientId =
    "1025490078098-i3aqus6h529dgc2pe3ts6o84970i5ig9.apps.googleusercontent.com";

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/categories" element={<Category />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/InfoExercises/:id" element={<InfoExercises />} />
              <Route path="/" element={<PageHome />} />
              <Route path="/pro" element={<PageProHome />} />
              <Route path="/" element={<Layout />} />
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </>
  );
}
export default App;
