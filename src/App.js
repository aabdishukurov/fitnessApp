import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";
import WaterCalculator from "./components/maksatbek/waterCalculator/WaterCalculator";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import { PageCategory } from "./pages/Category/PageCategory";
import { InfoExercises } from "./pages/InfoExercises/InfoExercises";
import {
  PageProfileNotifications,
  PageProfileStatistics,
  PageProfile,
  PageBuy,
  PageProLanding,
  PageNutritio,
} from "./pages";
import Timer from "./components/timer/Timer";
import ExerPage from "./pages/ExerPage/ExerPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./styles/index.scss";
function App() {
  const test = {
    name: "Глаз",
    cons: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius est ducimus praesentium quibusdam unde doloribus excepturi illum facilis eligendi, fuga harum perferendis ratione aliquid ab qui nemo ipsum similique ",
  };
  const clientId =
    "1025490078098-i3aqus6h529dgc2pe3ts6o84970i5ig9.apps.googleusercontent.com";
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientId}>
        <Provider store={store}>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Layout />}>
              {/* <Route index element={<WaterCalculator />} /> */}
              <Route path={`/categories`} element={<PageCategory />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/InfoExercises/:id" element={<InfoExercises />} />
              <Route path={`/timer`} element={<Timer />} />
              <Route path={`/ex`} element={<ExerPage test={test} />} />
              <Route path={`/buyPro`} element={<PageBuy />} />
              <Route path={`/profile`} element={<PageProfile />} />
              <Route
                path={`/notifications`}
                element={<PageProfileNotifications />}
              />
              <Route path={`/statistics`} element={<PageProfileStatistics />} />
              <Route path="/pro" element={<PageProLanding />} />
              <Route path={`/nutritio/:id`} element={<PageNutritio />} />
            </Route>
          </Routes>
        </Provider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}
export default App;
